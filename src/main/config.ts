import { DnsService } from "./services/dns.service";
import { WindowsPlatform } from "./platforms/windows/windows.platform";
import { Platform } from "./interfaces/platform.interface";
import os from "os"
import { LinuxPlatform } from "./platforms/windows/linux.platform";

let platform: Platform;


switch (os.platform()) {
    case "win32": platform = new WindowsPlatform()
        break;
    case "linux": platform = new LinuxPlatform();
        break;
    default:
        throw new Error("INVALID_PLATFORM")
}

export const dnsService: DnsService = new DnsService(platform)
