import Foundation

@objc public class ScanDataReceiver: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
