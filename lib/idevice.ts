
/* --- Functions -------------------------------------------------------------------------------- */
/* --- Run ---------------------------------------------------------- */
export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') {
    return 'server-' + Date.now().toString(36);
  }
  /* ---  Get Device ID ------------- */
  const STORAGE_KEY = 'htnidevice';
  let deviceId = localStorage.getItem(STORAGE_KEY);
  /* --- Create Device ID ----------- */
  if (!deviceId) {
    deviceId = generateDeviceId();
    localStorage.setItem(STORAGE_KEY, deviceId);
  }
  return deviceId;
}

/* --- Create ------------------------------------------------------- */
function generateDeviceId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 15);
  if (typeof navigator !== 'undefined') {
    return timestamp + "-" + random + "-i|" + parseDeviceInfo(navigator.userAgent + "|" || '');
  }
  return timestamp + "-" + random + "-i|o:-:-|b:-:-|d:-:-|";
}

/* --- Parse -------------------------------------------------------- */
export function parseDeviceInfo(userAgent: string, detail: boolean = false) {
  const ua = userAgent.toLowerCase();
  const os = ['unknown', '-'];
  const osVersion = ['unknown', '-'];
  const browser = ['unknown', '-'];
  const browserVersion = ['unknown', '-'];
  const deviceType = ['unknown', '-'];
  const deviceName = ['unknown', '-'];
  /* --- android -------------------- */
  if (ua.includes('android')) {
    os[0] = 'Android';
    os[1] = 'A';
    const androidMatch = userAgent.match(/Android\s+([\d.]+)/i);
    if (androidMatch) {
      osVersion[0] = androidMatch[1].trim() || '-';
      const versionParts = osVersion[0].split('.',2).join(".") || '-';
      osVersion[1] = versionParts.length > 1 ? versionParts[1] : versionParts[0];
    }
    /* --- Samsung, Xiaomi, etc. ---- */
    const deviceMatch = userAgent.match(/Android[^;]*;\s*([^)]+)/i);
    if (deviceMatch) {
      deviceName[0] = deviceMatch[1].trim() || '-';
      deviceName[1] = deviceName[0].split('.',2).join(".") || '-';
    }
  }
  /* --- ios ------------------------ */
  else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
    os[0] = ua.includes('ipad') ? 'Ios' : 'ios';
    os[1] = ua.includes('ipad') ? 'I' : 'i';
    const iosMatch = userAgent.match(/OS\s+([\d_]+)/i);
    if (iosMatch) {
      osVersion[0] = iosMatch[1].trim().replace(/_/g, '.') || '-';
      osVersion[1] = osVersion[0].split('.',2).join(".") || '-';
    }
    if (ua.includes('ipad')) {
      deviceName[0] = 'iPad';
      deviceName[1] = 'pad';
    } else if (ua.includes('ipod')) {
      deviceName[0] = 'iPod';
      deviceName[1] = 'pod';
    } else {
      deviceName[0] = 'iPhone';
      deviceName[1] = 'phone';
    }
  }
  /* --- windows -------------------- */
  else if (ua.includes('windows')) {
    os[0] = 'Windows';
    os[1] = 'W';
    if (ua.includes('windows nt 10')) {
      osVersion[0] = '10';
      osVersion[1] = '10';
    }
    else if (ua.includes('windows nt 6.3')) {
      osVersion[0] = '8.1';
      osVersion[1] = '8.1';
    }
    else if (ua.includes('windows nt 6.2')) {
      osVersion[0] = '8';
      osVersion[1] = '8';
    }
    else if (ua.includes('windows nt 6.1')) {
      osVersion[0] = '7';
      osVersion[1] = '7';
    }
  }
  /* --- macos ---------------------- */
  else if (ua.includes('mac os x') || ua.includes('macintosh')) {
    os[0] = 'Macos';
    os[1] = 'M';
    const macMatch = userAgent.match(/Mac OS X\s+([\d_]+)/i);
    if (macMatch) {
      osVersion[0] = macMatch[1].trim() || '-';
      osVersion[1] = osVersion[0].split('.',2).join(".") || '-';
    }
  }
  /* --- linux ---------------------- */
  else if (ua.includes('linux')) {
    os[0] = 'Linux';
    os[1] = 'L';
  }

  /* --- device type ---------------- */
  if (ua.includes('tablet') || ua.includes('ipad')) {
    deviceType[0] = 'Tablet';
    deviceType[1] = 'T';
  } else if (ua.includes('mobile') || (ua.includes('android') && !ua.includes('tablet'))) {
    deviceType[0] = 'Mobile';
    deviceType[1] = 'M';
  } else {
    deviceType[0] = 'Desktop';
    deviceType[1] = 'D';
  }

  /* --- browser -------------------- */
  browser[0] = 'unknown';
  browser[1] = '-';
  browserVersion[0] = 'unknown';
  browserVersion[1] = '-';

  /* --- chrome --------------------- */
  if (ua.includes('chrome') && !ua.includes('edg')) {
    browser[0] = 'Chrome';
    browser[1] = 'C';
    const chromeMatch = userAgent.match(/Chrome\/([\d.]+)/i);
    if (chromeMatch) {
      browserVersion[0] = chromeMatch[1].trim() || '-';
      browserVersion[1] = browserVersion[0].split('.',2).join(".") || '-';
    }
  }
  /* --- safari --------------------- */
  else if (ua.includes('safari') && !ua.includes('chrome')) {
    browser[0] = 'Safari';
    browser[1] = 'S';
    const safariMatch = userAgent.match(/Version\/([\d.]+)/i);
    if (safariMatch) {
      browserVersion[0] = safariMatch[1].trim() || '-';
      browserVersion[1] = browserVersion[0].split('.',2).join(".") || '-';
    }
  }
  /* --- firefox -------------------- */
  else if (ua.includes('firefox')) {
    browser[0] = 'Firefox';
    browser[1] = 'F';
    const firefoxMatch = userAgent.match(/Firefox\/([\d.]+)/i);
    if (firefoxMatch) {
      browserVersion[0] = firefoxMatch[1].trim() || '-';
      browserVersion[1] = browserVersion[0].split('.',2).join(".") || '-';
    }
  }
  /* --- edge ----------------------- */
  else if (ua.includes('edg')) {
    browser[0] = 'Edge';
    browser[1] = 'E';
    const edgeMatch = userAgent.match(/Edg\/([\d.]+)/i);
    if (edgeMatch) {
      browserVersion[0] = edgeMatch[1].trim() || '-';
      browserVersion[1] = browserVersion[0].split('.',2).join(".") || '-';
    }
  }
  /* --- return --------------------- */
  if (detail) {
    return "OS:" + os[0] + ":" + osVersion[0] + "|BROWSER:" + browser[0] + ":" + browserVersion[0] + "|DEVICE:" + deviceType[0] + ":" + deviceName[0];
  } else {
    return "o:" + os[1] + ":" + osVersion[1] + "|b:" + browser[1] + ":" + browserVersion[1] + "|d:" + deviceType[1] + ":" + deviceName[1];
  }
}