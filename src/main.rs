fn main() {
    println!("Hello, world!");
}

// Functions that you wish to access from Javascript
// must be marked as no_mangle
#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b
}
