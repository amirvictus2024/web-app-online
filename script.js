/* داده‌های لوکیشن برای IPv4 */
const locations = {
    germany: {
        ipv6_prefix: "2a02:2ae8",
        ipv4_ranges: [
            "84.128.0.0/10", "87.128.0.0/10", "91.0.0.0/10", "79.192.0.0/10",
            "93.192.0.0/10", "217.224.0.0/11", "80.128.0.0/11", "91.32.0.0/11",
            "93.192.0.0/11", "217.80.0.0/12"
        ]
    },
    tr: {
        ipv6_prefix: "2a02:2ae8",
        ipv4_ranges: [
            "78.161.221.0/24", "78.163.24.0/24", "78.163.96.0/21", "78.163.105.0/24",
            "78.163.112.0/20", "78.163.128.0/22", "78.163.156.0/23", "78.163.164.0/22",
            "78.164.209.0/24", "78.165.64.0/20", "78.165.80.0/21", "78.165.88.0/24",
            "78.165.92.0/22", "78.165.96.0/19", "78.165.192.0/20", "78.165.208.0/24",
            "78.165.211.0/24", "78.165.212.0/23", "78.165.215.0/24", "78.165.216.0/24"
        ]
    },
    uae: {
        ipv6_prefix: "2a02:2ae8",
        ipv4_ranges: [
            "184.25.205.0/24", "5.30.0.0/15", "5.32.0.0/17", "23.194.192.0/22",
            "46.19.77.0/24", "46.19.78.0/23", "80.227.0.0/16", "87.200.0.0/15",
            "91.72.0.0/14", "94.200.0.0/14", "94.204.0.0/15", "94.206.0.0/16",
            "94.207.0.0/19", "94.207.48.0/20", "94.207.64.0/18", "94.207.128.0/17",
            "104.109.251.0/24", "149.24.230.0/23", "160.83.52.0/23", "213.132.32.0/19"
        ]
    },
    usa: {
        ipv6_prefix: "2608:120",
        ipv4_ranges: [
            "20.192.0.0/10", "52.224.0.0/11", "20.0.0.0/11", "4.128.0.0/12", "4.144.0.0/12",
            "4.160.0.0/12", "4.176.0.0/12", "4.192.0.0/12", "4.208.0.0/12", "4.224.0.0/12",
            "4.240.0.0/12", "20.160.0.0/12", "104.40.0.0/13", "104.208.0.0/13",
            "40.64.0.0/13", "23.96.0.0/13", "214.30.0.0/15",
            "55.0.0.0/16",
            "131.73.128.0/17",
            "215.72.128.0/17",
            "55.189.192.0/18",
            "205.76.192.0/18",
            "205.103.192.0/18",
            "214.57.64.0/18",
            "205.100.96.0/19",
            "205.103.128.0/19",
            "160.140.192.0/19",
            "205.84.64.0/18",
            "205.60.64.0/19",
            "205.72.32.0/19",
            "143.74.0.0/19",
            "205.65.80.0/20",
            "144.105.80.0/20",
            "205.105.192.0/20",
            "205.90.208.0/20",
            "205.91.208.0/20",
            "158.11.32.0/19",
            "139.241.160.0/19",
            "205.56.240.0/22",
            "205.107.224.0/22",
            "205.86.152.0/21",
            "205.103.96.0/20",
            "205.108.80.0/20",
            "205.84.48.0/20",
            "205.107.32.0/20",
            "205.60.240.0/20",
            "205.108.184.0/21",
            "198.218.80.0/21",
            "143.76.128.0/21",
            "198.220.168.0/21",
            "205.78.112.0/20",
            "205.78.104.0/21",
            "205.76.160.0/19",
            "205.91.200.0/21",
            "205.60.96.0/22",
            "205.88.128.0/19"
        ]
    },
    russia: {
        ipv6_prefix: "2a00:1e88",
        ipv4_ranges: [
            "2.60.0.0/15", "2.62.0.0/16", "5.136.0.0/15", "5.138.0.0/16",
            "31.162.0.0/15", "31.180.0.0/15", "37.20.0.0/14", "37.78.0.0/15",
            "46.158.0.0/15", "78.36.0.0/15", "78.85.0.0/16", "185.27.148.0/22",
            "185.140.148.0/22", "185.169.100.0/22", "185.199.4.0/22", "185.205.128.0/22",
            "185.226.128.0/22", "188.16.0.0/16", "188.17.0.0/18", "188.17.64.0/19",
            "188.17.96.0/20", "188.17.120.0/21", "188.17.128.0/18", "188.17.192.0/19",
            "188.18.0.0/18", "188.18.64.0/19", "188.18.96.0/20", "188.18.120.0/21",
            "188.18.128.0/17", "188.19.0.0/16", "188.113.0.0/18", "188.114.0.0/18",
            "188.128.0.0/17", "188.133.192.0/18", "188.254.0.0/17", "195.19.96.0/20",
            "195.38.32.0/19", "195.46.96.0/19", "195.162.32.0/19", "212.20.0.0/18",
            "212.32.192.0/19", "212.34.96.0/19", "212.35.160.0/19", "212.48.192.0/19",
            "212.55.96.0/19", "212.57.128.0/18", "212.96.192.0/19", "212.106.32.0/19",
            "212.120.160.0/19", "212.124.0.0/20", "212.164.0.0/16", "212.220.0.0/17",
            "212.220.128.0/18", "212.220.192.0/20", "212.220.224.0/19", "213.24.112.0/20",
            "213.59.192.0/18", "213.129.32.0/19", "213.135.96.0/19", "213.155.200.0/21",
            "213.155.208.0/20", "213.158.0.0/20", "213.167.192.0/19", "213.177.96.0/19",
            "213.228.64.0/19", "213.228.96.0/20", "213.242.0.0/18", "217.20.80.0/20",
            "217.23.16.0/20", "217.65.80.0/20", "217.70.96.0/19", "217.107.64.0/19",
            "217.107.112.0/20", "217.107.128.0/18", "217.107.224.0/19", "217.116.128.0/19"
        ]
    }
};

/* رنج‌های ثابت IPv6 برای WireGuard (برای تولید آدرس‌های IPv6) */
const wgIPv6Ranges = [
    "2003:ec:2740::/42",
    "2003:ec::/35",
    "2a01:599:148:2e80::/58",
    "2a01:59a::/31",
    "2003:ee::/37"
];

/* توابع کمکی */
function arrayBufferToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

function generateKeyPair() {
    const keyPair = nacl.box.keyPair();
    return {
        privateKey: arrayBufferToBase64(keyPair.secretKey),
        publicKey: arrayBufferToBase64(keyPair.publicKey)
    };
}

function randomIPv4FromCIDR(cidr) {
    const [base, prefix] = cidr.split("/");
    const prefixNum = parseInt(prefix, 10);
    const parts = base.split(".").map(Number);
    const ipNum = (((parts[0] << 24) >>> 0) | ((parts[1] << 16) >>> 0) | ((parts[2] << 8) >>> 0) | (parts[3] >>> 0)) >>> 0;
    const hostBits = 32 - prefixNum;
    const networkNum = ipNum & (~0 << hostBits);
    const maxHosts = Math.pow(2, hostBits);
    const randomOffset = Math.floor(Math.random() * maxHosts);
    const randomIPNum = networkNum + randomOffset;
    const a = (randomIPNum >>> 24) & 0xff;
    const b = (randomIPNum >>> 16) & 0xff;
    const c = (randomIPNum >>> 8) & 0xff;
    const d = randomIPNum & 0xff;
    return `${a}.${b}.${c}.${d}`;
}

/* توابع کمکی برای کار با IPv6 و BigInt */

// تبدیل آدرس IPv6 به BigInt (با گسترش نشانه "::")
function ipv6ToBigInt(ip) {
    const parts = ip.split("::");
    const left = parts[0] ? parts[0].split(":") : [];
    const right = parts[1] ? parts[1].split(":") : [];
    const missing = 8 - (left.length + right.length);
    const groups = left.concat(new Array(missing).fill("0")).concat(right);
    let result = 0n;
    groups.forEach(group => {
        result = (result << 16n) + BigInt(parseInt(group || "0", 16));
    });
    return result;
}

// تبدیل BigInt به آدرس IPv6 (به صورت کامل بدون کوتاه‌سازی)
function bigIntToIPv6(bigIntVal) {
    const groups = [];
    for (let i = 0; i < 8; i++) {
        const shift = BigInt((7 - i) * 16);
        const group = Number((bigIntVal >> shift) & 0xffffn);
        groups.push(group.toString(16));
    }
    return groups.join(":");
}

// تولید یک BigInt تصادفی با تعداد بیت مشخص
function randomBigInt(bits) {
    const bytes = Math.ceil(bits / 8);
    const randomBytes = new Uint8Array(bytes);
    crypto.getRandomValues(randomBytes);
    let result = 0n;
    for (let byte of randomBytes) {
        result = (result << 8n) + BigInt(byte);
    }
    const extra = bytes * 8 - bits;
    if (extra > 0) {
        result = result & ((1n << BigInt(bits)) - 1n);
    }
    return result;
}

// تولید یک آدرس IPv6 تصادفی که در محدوده CIDR داده‌شده قرار دارد
function randomIPv6FromCIDR(cidr) {
    const [ip, prefixLengthStr] = cidr.split("/");
    const prefixLength = parseInt(prefixLengthStr, 10);
    const ipBigInt = ipv6ToBigInt(ip);
    const hostBits = 128 - prefixLength;
    // ماسک شبکه: بیت‌های بالاتر ثابت می‌شوند
    const mask = ((1n << 128n) - 1n) ^ ((1n << BigInt(hostBits)) - 1n);
    const network = ipBigInt & mask;
    // تولید مقدار تصادفی برای بیت‌های میزبان
    const randomOffset = randomBigInt(hostBits);
    const randomIpBigInt = network + randomOffset;
    return bigIntToIPv6(randomIpBigInt);
}

// تولید DNS آدرس‌های IPv6 با استفاده از CIDR داده‌شده
function generateIPv6DNSAddresses(prefix) {
    // اگر پیشوند شامل CIDR نباشد، پیش‌فرض /64 را اضافه می‌کنیم
    if (!prefix.includes("/")) {
        prefix = prefix + "/64";
    }
    return [randomIPv6FromCIDR(prefix), randomIPv6FromCIDR(prefix)];
}

function generateIPv4DNSAddresses(locationData) {
    const filteredRanges = locationData.ipv4_ranges.filter(range => !range.includes("/10"));
    if (filteredRanges.length === 0) return ["", ""];
    const range1 = filteredRanges[Math.floor(Math.random() * filteredRanges.length)];
    const range2 = filteredRanges[Math.floor(Math.random() * filteredRanges.length)];
    const ip1 = randomIPv4FromCIDR(range1);
    const ip2 = randomIPv4FromCIDR(range2);
    return [ip1, ip2];
}

function generateDnsConfig(location) {
    const locationData = locations[location];
    const dnsIPv4Addresses = generateIPv4DNSAddresses(locationData);
    const dnsIPv6Addresses = generateIPv6DNSAddresses(locationData.ipv6_prefix);
    return `DNS Addresses for ${location.toUpperCase()}:

IPv4 DNS:
Primary DNS: ${dnsIPv4Addresses[0]}
Secondary DNS: ${dnsIPv4Addresses[1]}

IPv6 DNS:
Primary DNS: ${dnsIPv6Addresses[0]}
Secondary DNS: ${dnsIPv6Addresses[1]}`;
}

function downloadFile(content, filename) {
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

/* تابع نمایش پیام هشدار */
function showWarning(id, message) {
    const warningElem = document.getElementById(id);
    warningElem.textContent = message;
    warningElem.style.display = "block";
    setTimeout(() => {
        warningElem.style.display = "none";
    }, 3000);
}

/* تابع تولید پیکربندی WireGuard */
function generateWgConfig(location, configName) {
    const ipVersion = document.querySelector('input[name="ipVersion"]:checked').value;
    if (ipVersion === "ipv4") {
        if (!location) return "";
        const locationData = locations[location];
        const availableIPs = locationData.ipv4_ranges.filter(range => !range.includes("/10"));
        if (availableIPs.length < 2) return "Not enough IP ranges available.";
        const randomIndex1 = Math.floor(Math.random() * availableIPs.length);
        const ip1 = randomIPv4FromCIDR(availableIPs[randomIndex1]);
        availableIPs.splice(randomIndex1, 1);
        const randomIndex2 = Math.floor(Math.random() * availableIPs.length);
        const ip2 = randomIPv4FromCIDR(availableIPs[randomIndex2]);

        const clientKeyPair = generateKeyPair();
        const serverKeyPair = generateKeyPair();
        const dnsIPv4 = generateIPv4DNSAddresses(locationData);
        const endpointAddress = ip1 + ":443";

        return `[Interface]
PrivateKey = ${clientKeyPair.privateKey}
Address = 10.202.10.10/32, ${ip1}/16, ${ip2}/32
ListenPort = 51820
DNS = 78.157.42.100, ${dnsIPv4[0]}, ${dnsIPv4[1]}
MTU = 1400

[Peer]
PublicKey = ${serverKeyPair.publicKey}
Endpoint = ${endpointAddress}
AllowedIPs = 0.0.0.0/8, ::/8
PersistentKeepalive = 20`;
    } else {
        // حالت IPv6:
        let ipv4Location = document.getElementById("location").value || "germany";
        const locationData = locations[ipv4Location];
        const availableIPs = locationData.ipv4_ranges.filter(range => !range.includes("/10"));
        if (availableIPs.length < 2) return "Not enough IPv4 IP ranges available.";
        const randomIndex1 = Math.floor(Math.random() * availableIPs.length);
        const ip1 = randomIPv4FromCIDR(availableIPs[randomIndex1]);
        availableIPs.splice(randomIndex1, 1);
        const randomIndex2 = Math.floor(Math.random() * availableIPs.length);
        const ip2 = randomIPv4FromCIDR(availableIPs[randomIndex2]);

        const dnsIPv4 = generateIPv4DNSAddresses(locationData);

        const clientKeyPair = generateKeyPair();
        const serverKeyPair = generateKeyPair();

        // انتخاب یک پیشوند IPv6 از رنج‌های تعریف‌شده
        const chosenPrefix = wgIPv6Ranges[Math.floor(Math.random() * wgIPv6Ranges.length)];

        // تولید آدرس‌های IPv6 در محدوده CIDR انتخاب‌شده
        const endpointIPv6 = randomIPv6FromCIDR(chosenPrefix);
        const wgIPv6Interface = randomIPv6FromCIDR(chosenPrefix);
        const wgIPv6DNS = randomIPv6FromCIDR(chosenPrefix);

        // استفاده از براکت برای آدرس IPv6 در endpoint
        const finalEndpoint = `[${endpointIPv6}]:443`;

        return `[Interface]
PrivateKey = ${clientKeyPair.privateKey}
Address = 10.202.10.10/32, ${ip1}/16, ${ip2}/32, ${wgIPv6Interface}/128
ListenPort = 51820
DNS = 78.157.42.100, ${dnsIPv4[0]}, ${dnsIPv4[1]}, ${wgIPv6DNS}
MTU = 1400

[Peer]
PublicKey = ${serverKeyPair.publicKey}
Endpoint = ${finalEndpoint}
AllowedIPs = 0.0.0.0/8, ::/8
PersistentKeepalive = 20`;
    }
}

/* مدیریت تغییر تب‌ها با انیمیشن */
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('active');
        });
        setTimeout(() => {
            document.getElementById(target).classList.add('active');
        }, 50);
    });
});

/* نمایش/پنهان کردن تنظیمات IPv6 */
document.querySelectorAll('input[name="ipVersion"]').forEach(radio => {
    radio.addEventListener("change", () => {
        const ipv6ModeContainer = document.getElementById("ipv6ModeContainer");
        if (document.querySelector('input[name="ipVersion"]:checked').value === "ipv6") {
            ipv6ModeContainer.style.display = "block";
        } else {
            ipv6ModeContainer.style.display = "none";
        }
    });
});

/* رویدادهای بخش WireGuard */
document.getElementById("location").addEventListener("change", () => {
    const ipVersion = document.querySelector('input[name="ipVersion"]:checked').value;
    if (ipVersion === "ipv4") {
        const location = document.getElementById("location").value;
        if (location) {
            const configName = document.getElementById("configName").value;
            const wgConfig = generateWgConfig(location, configName);
            document.getElementById("wgConfigOutput").textContent = wgConfig;
            document.getElementById("wgConfigContainer").classList.add("visible");
        } else {
            document.getElementById("wgConfigContainer").classList.remove("visible");
        }
    }
});

document.getElementById("configName").addEventListener("input", () => {
    const ipVersion = document.querySelector('input[name="ipVersion"]:checked').value;
    const location = document.getElementById("location").value;
    const configName = document.getElementById("configName").value;
    if (ipVersion === "ipv4" && location) {
        const wgConfig = generateWgConfig(location, configName);
        document.getElementById("wgConfigOutput").textContent = wgConfig;
    } else if (ipVersion === "ipv6") {
        const wgConfig = generateWgConfig(null, configName);
        document.getElementById("wgConfigOutput").textContent = wgConfig;
    }
});

document.getElementById("generateNameBtn").addEventListener("click", () => {
    const randomName = generateRandomWGName();
    document.getElementById("configName").value = randomName;
    const ipVersion = document.querySelector('input[name="ipVersion"]:checked').value;
    const location = document.getElementById("location").value;
    if (ipVersion === "ipv4" && location) {
        const wgConfig = generateWgConfig(location, randomName);
        document.getElementById("wgConfigOutput").textContent = wgConfig;
    } else {
        const wgConfig = generateWgConfig(null, randomName);
        document.getElementById("wgConfigOutput").textContent = wgConfig;
    }
});

function generateRandomWGName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `WG-${result}`;
}

document.getElementById("generateNewConfig").addEventListener("click", () => {
    const ipVersion = document.querySelector('input[name="ipVersion"]:checked').value;
    if (ipVersion === "ipv4") {
        const location = document.getElementById("location").value;
        if (!location) {
            showWarning("wgWarning", "Please select a location!");
            return;
        }
        const configName = document.getElementById("configName").value;
        const wgConfig = generateWgConfig(location, configName);
        document.getElementById("wgConfigOutput").textContent = wgConfig;
        document.getElementById("wgConfigContainer").classList.add("visible");
    } else {
        const configName = document.getElementById("configName").value;
        const wgConfig = generateWgConfig(null, configName);
        document.getElementById("wgConfigOutput").textContent = wgConfig;
        document.getElementById("wgConfigContainer").classList.add("visible");
    }
});

/* رویدادهای بخش DNS */
function updateDnsConfig() {
    const location = document.getElementById("dnsLocation").value;
    if (location) {
        const dnsConfig = generateDnsConfig(location);
        document.getElementById("dnsConfigOutput").textContent = dnsConfig;
        document.getElementById("dnsConfigContainer").classList.add("visible");
    } else {
        document.getElementById("dnsConfigContainer").classList.remove("visible");
    }
}
document.getElementById("dnsLocation").addEventListener("change", updateDnsConfig);
document.getElementById("generateNewDns").addEventListener("click", () => {
    const location = document.getElementById("dnsLocation").value;
    if (!location) {
        showWarning("dnsWarning", "Please select a location!");
        return;
    }
    updateDnsConfig();
});

/* رویدادهای کپی و دانلود */
document.getElementById("copyWgBtn").addEventListener("click", async () => {
    const config = document.getElementById("wgConfigOutput").textContent;
    await navigator.clipboard.writeText(config);
    const btn = document.getElementById("copyWgBtn");
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
        btn.innerHTML = `<span class="material-icons">content_copy</span>Copy`;
        btn.classList.remove("copied");
    }, 2000);
});

document.getElementById("copyDnsBtn").addEventListener("click", async () => {
    const config = document.getElementById("dnsConfigOutput").textContent;
    await navigator.clipboard.writeText(config);
    const btn = document.getElementById("copyDnsBtn");
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
        btn.innerHTML = `<span class="material-icons">content_copy</span>Copy`;
        btn.classList.remove("copied");
    }, 2000);
});

document.getElementById("downloadWgBtn").addEventListener("click", () => {
    const location = document.getElementById("location").value;
    const configName = document.getElementById("configName").value || `wireguard-${location || "ipv6"}`;
    const config = document.getElementById("wgConfigOutput").textContent;
    downloadFile(config, configName + ".conf");
});

document.getElementById("downloadDnsBtn").addEventListener("click", () => {
    const location = document.getElementById("dnsLocation").value;
    const config = document.getElementById("dnsConfigOutput").textContent;
    downloadFile(config, `dns-${location}.txt`);
});

/* تغییر تم */
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const icon = toggleBtn.querySelector(".material-icons");
    if (document.body.classList.contains("dark-theme")) {
        icon.textContent = "light_mode";
    } else {
        icon.textContent = "dark_mode";
    }
});
