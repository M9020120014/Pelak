
/* --- Functions -------------------------------------------------------------------------------- */
/* --- Normalize Number --------------------------------------------- */
export function normalizeNumber(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- faToEn nums ---------------- */
  str = str.replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 1776));
  /* --- arToEn nums ---------------- */
  str = str.replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632));
  /* --- only numbers --------------- */
  str = str.replace(/[^0-9]/g, "");

  return str;
}

/* --- Normalize Data ----------------------------------------------- */
export function normalizeData(input: string = ""): string {
  if (!input) return "";

  let str = input.normalize("NFKC");
  /* --- arToFa --------------------- */
  const map: Record<string, string> = {
    "ي": "ی",
    "ى": "ی",
    "ئ": "ی",
    "ؤ": "و",

    "ك": "ک",

    "ة": "ه",
    "ۀ": "ه",

    "أ": "ا",
    "إ": "ا",
    "ٱ": "ا",
  };
  Object.keys(map).forEach((key) => {
    str = str.replace(new RegExp(key, "g"), map[key]);
  });
  /* --- arToFa nums ---------------- */
  str = str.replace(/[٠-٩]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1584));
  /* --- space ---------------------- */
  str = str.replace(/[\u00A0\u2007\u202F]/g, " ");
  /* --- ZWJ ------------------------ */
  str = str.replace(/\u200D/g, "");
  str = str.replace(/\u200B/g, "");
  /* --- ZWNJ ----------------------- */
  str = str.replace(/\u200C/g, "");
  /* --- double space --------------- */
  str = str.replace(/ {2,}/g, " ");

  return str.trim();
}

/* --- Normalize English -------------------------------------------- */
export function normalizeEnglish(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- only letters and nums ------ */
  str = str.replace(/[^a-zA-Z0-9]/g, "");

  return str;
}

/* --- Normalize Persian ------------------------------------------- */
export function normalizePersian(input: string = ""): string {
  if (!input) return "";

  let str = input.normalize("NFKC");
  /* --- arToFa --------------------- */
  const map: Record<string, string> = {
    "ي": "ی",
    "ى": "ی",
    "ئ": "ی",
    "ؤ": "و",

    "ك": "ک",

    "ة": "ه",
    "ۀ": "ه",

    "أ": "ا",
    "إ": "ا",
    "ٱ": "ا",
  };
  Object.keys(map).forEach((key) => {
    str = str.replace(new RegExp(key, "g"), map[key]);
  });
  /* --- enToFa nums ---------------- */
  str = str.replace(/[0-9]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728));
  /* --- arToFa nums ---------------- */
  str = str.replace(/[٠-٩]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1584));
  /* --- space ---------------------- */
  str = str.replace(/[\u00A0\u2007\u202F]/g, " ");
  /* --- ZWJ ------------------------ */
  str = str.replace(/\u200D|\u200B/g, "");
  /* --- ZWNJ ----------------------- */
  str = str.replace(/[^آ-ی۰-۹\u200C .]/g, "");
  /* --- double space --------------- */
  str = str.replace(/ {2,}/g, " ");

  return str.trim();
}

/* --- Normalize Mobile --------------------------------------------- */
export function normalizeMobile(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- normalize number ----------- */
  str = normalizeNumber(str);
  /* --- ensure starts with 09 ------ */
  if (!str.startsWith("09")) {
    if (str === "0") {
      str = "0";
    } else {
      str = "09"
    }
  }
  /* --- Take first 11 digits ------- */
  if (str.length > 11) {
    str = str.slice(0, 11);
  }

  return str;
}


/* --- Normalize Otp Code ----------------------------------------- */
export function normalizeOtpCode(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- normalize number ----------- */
  str = normalizeNumber(str);
  /* --- Take first 4 digits ------- */
  if (str.length > 4) {
    str = str.slice(0, 4);
  }

  return str;
}

/* --- Normalize Numbers Only (keep other chars) ------------------ */
function normalizeNumbersOnly(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- faToEn nums ---------------- */
  str = str.replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 1776));
  /* --- arToEn nums ---------------- */
  str = str.replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632));

  return str;
}

/* --- Normalize Short Date --------------------------------------------- */
export function normalizeShortDate(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- trim ---------------------- */
  str = str.trim();
  /* --- normalize separators ------- */
  // هر دو `/` و `-` را به `-` تبدیل می‌کنیم
  str = str.replace(/\//g, '-');
  /* --- normalize numbers ----------- */
  str = normalizeNumbersOnly(str);
  /* --- extract date part ---------- */
  const parts = str.split(/[\sT]/);
  const datePart = parts[0];
  /* --- check format -------------- */
  // فرمت را انعطاف‌پذیرتر می‌کنیم تا هم `/` و هم `-` را بپذیرد
  const dateRegex = /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/;
  const match = datePart.match(dateRegex);
  if (!match) {
    return "";
  }
  /* --- pad month and day ---------- */
  const year = match[1];
  const month = match[2].padStart(2, '0');
  const day = match[3].padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

/* --- Normalize Date --------------------------------------------- */
export function normalizeDate(input: string = ""): string {
  if (!input) return "";

  let str = input;
  /* --- trim ---------------------- */
  str = str.trim();
  /* --- normalize separators ------- */
  str = str.replace(/\//g, '-');
  /* --- normalize numbers ----------- */
  str = normalizeNumbersOnly(str);
  /* --- split date and time ------- */
  const parts = str.split(/[\sT]/);
  const datePart = parts[0] || "";
  const timePart = parts[1] || "";
  
  /* --- normalize date part ------- */
  let normalizedDate = "";
  if (datePart) {
    /* --- check date format --------- */
    const dateRegex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    const dateMatch = datePart.match(dateRegex);
    if (dateMatch) {
      const year = dateMatch[1];
      const month = dateMatch[2].padStart(2, '0');
      const day = dateMatch[3].padStart(2, '0');
      normalizedDate = `${year}-${month}-${day}`;
    } else {
      return "";
    }
  }
  
  /* --- normalize time part ------- */
  let normalizedTime = "";
  if (timePart) {
    /* --- check time format --------- */
    const timeRegex = /^(\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?$/;
    const timeMatch = timePart.match(timeRegex);
    if (timeMatch) {
      const hour = timeMatch[1].padStart(2, '0');
      const minute = timeMatch[2].padStart(2, '0');
      const second = timeMatch[3].padStart(2, '0');
      const microseconds = timeMatch[4] || '';
      normalizedTime = `${hour}:${minute}:${second}${microseconds}`;
    } else {
      return normalizedDate || "";
    }
  }
  
  return normalizedTime ? `${normalizedDate} ${normalizedTime}` : normalizedDate;
}
