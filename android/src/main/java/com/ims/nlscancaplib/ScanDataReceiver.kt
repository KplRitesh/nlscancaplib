package com.ims.nlscancaplib

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

/**
 * Created by Ritz Kpl on 02/09/2025.
 */
class ScanDataReceiver: BroadcastReceiver() {
    private var listener: ScanDataListener? = null
    interface ScanDataListener {
        fun onScanDataReceived(barcode: String?, rawData: ByteArray?)
    }
    fun setScanDataListener(listener: ScanDataListener?) {
        this.listener = listener
    }
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == "nlscan.action.SCANNER_RESULT") {
            val barcode = intent.getStringExtra("SCAN_BARCODE1")
            val rawData = intent.getByteArrayExtra("SCAN_BARCODE1_RAW")

            Log.d("ScanDataReceiver", "Barcode: $barcode")
            Log.d("ScanDataReceiver", "Raw Data: ${rawData?.contentToString()}")

            listener?.onScanDataReceived(barcode, rawData)
        }
    }
}