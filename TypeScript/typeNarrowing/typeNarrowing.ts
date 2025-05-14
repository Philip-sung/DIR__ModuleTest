type A = { a: string };
type B = { b: number };

class AB implements A, B {
  a = "hello";
  b = 42;

  isA(): this is A {
    return true;
  }
}

const ab = new AB();

if (ab.isA()) {
  // 여기선 ab가 A로 추론됨
  console.log(ab.a); // ✅ OK
  // console.log(ab.b); // ⚠️ 오류: b는 A에 없음
}
