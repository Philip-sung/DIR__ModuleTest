import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export const RunTestCode = () => {
  // Node.js 환경에서는 DOM 객체가 필요하므로, JSDOM을 통해 DOM을 생성합니다.
  const window = new JSDOM("").window;
  const DOMPurifyInstance = DOMPurify(window);

  // 예제 입력과 정제 과정
  const userInput = "<script>alert('XSS Attack!')</script><p>Safe Text</p>";
  const sanitizedHTML = DOMPurifyInstance.sanitize(userInput);

  console.log(inputSanitizationForEachCharacter("a"));
  console.log(inputSanitizationForEachCharacter("."));
  console.log(inputSanitizationForEachCharacter("に"));
  console.log(inputSanitizationForEachCharacter(">"));
  console.log(inputSanitizationForEachCharacter("😹"));

  console.log(
    sanitizeTextInput(
      "Test For Text Input<Sanitized!><Inject!>に😹 \nHello, World!"
    )
  );
};

export const sanitizeTextInput = (text) => {
  return Array.from(text).filter(inputSanitizationForEachCharacter).join("");
};

const inputSanitizationForEachCharacter = (char) => {
  if (checkIfUnicodeLetterOrNumberCharacter(char)) return char;

  return null;
};

const checkIfUnicodeLetterOrNumberCharacter = (char) => {
  if (char.length !== 1) return null;
  const unicodeLetterAndNumberRegex = /[\p{L}\p{N}]/u;
  return (
    unicodeLetterAndNumberRegex.test(char) | checkIfSafeSpecialCharacter(char)
  );
};

const checkIfSafeSpecialCharacter = (char) => {
  const safeSpecialCharacterList = [
    "\n",
    "'",
    " ",
    ".",
    ",",
    ":",
    ";",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "%",
    '"',
    "“",
    "”",
    "‘",
    "’",
    "#",
    "_",
    "@",
    "¥",
    "$",
    "€",
    "£",
    "+",
    "-",
    "*",
    "×",
    "/",
    "÷",
    "=",
  ];

  return safeSpecialCharacterList.includes(char);
};
