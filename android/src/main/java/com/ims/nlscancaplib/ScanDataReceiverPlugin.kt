package com.ims.nlscancaplib

import android.annotation.SuppressLint
import android.content.Intent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import android.content.IntentFilter
import android.util.Base64
import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import kotlinx.coroutines.*
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Created by Ritz Kpl on 02/09/2025.
 */

@CapacitorPlugin(name = "ScanDataReceiver")
class ScanDataReceiverPlugin : Plugin() {

    private var receiver: ScanDataReceiver? = null
    private val coroutineScope = CoroutineScope(Dispatchers.Default)
    private lateinit var scanDataListener: ScanDataReceiver.ScanDataListener

    @SuppressLint("UnspecifiedRegisterReceiverFlag")
    @PluginMethod
    fun registerScanner(call: PluginCall) {
        if (receiver == null) {
            receiver = ScanDataReceiver()

            scanDataListener = object : ScanDataReceiver.ScanDataListener {
                override fun onScanDataReceived(barcode: String?, rawData: ByteArray?) {
                    Log.d("onScanDataReceived","scanned Item: $barcode")
                    notifyListeners("scanDataReceived", JSObject().put("data", barcode))
                }
            }
            receiver?.setScanDataListener(scanDataListener) 

            val filter = IntentFilter("nlscan.action.SCANNER_RESULT")
            context.registerReceiver(receiver, filter)
        }
        call.resolve()
    }

    @PluginMethod
    fun stopScanning(call: PluginCall) {
        if (receiver != null) {
            context.unregisterReceiver(receiver)
            receiver = null
        }
        call.resolve()
    }

    @PluginMethod
    fun triggerScan(call: PluginCall) {
        val timeout = call.getInt("timeout", 4) 
        val scanType = call.getInt("scanType", 1) 
        val intent = Intent("nlscan.action.SCANNER_TRIG")
        intent.putExtra("SCAN_TIMEOUT", timeout)
        intent.putExtra("SCAN_TYPE", scanType)
        context.sendBroadcast(intent)
        call.resolve()
    }

    override fun handleOnPause() {
        super.handleOnPause()
        if (receiver != null) {
            context.unregisterReceiver(receiver)
            receiver = null
            Log.d("BarcodeScannerPlugin", "BroadcastReceiver unregistered in onPause()") 
        } else {
            Log.d("BarcodeScannerPlugin", "BroadcastReceiver was null in onPause()") 
        }
    }

    override fun handleOnDestroy() {
        super.handleOnDestroy()
        coroutineScope.cancel()
        if (receiver != null) {
            context.unregisterReceiver(receiver)
            receiver = null
            Log.d("BarcodeScannerPlugin", "BroadcastReceiver unregistered in onDestroy()")
        } else {
            Log.d("BarcodeScannerPlugin", "BroadcastReceiver was null in onDestroy()") 
        }
    }

}