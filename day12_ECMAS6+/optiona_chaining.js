const obj = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
      cat2: {
        name: 'Dinah',
        cat3: {
            name: 'Dinah',
          },
      },
    },
};

// optional chaining: dung de check xem property co ton tai hay khong
// neu co thi tra ve gia tri cua property do, neu khong thi tra ve undefined
// dung de tranh loi khi truy cap vao property khong ton tai

// syntax
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)

// dung khi khong chac chan property co ton tai hay khong

if (
    // obj.cat.name &&
    // obj.cat.cat2.name &&
    // obj.cat.cat2.cat3.name
    obj.cat?.cat2?.cat3?.name
)
console.log(obj.cat.cat2.cat3.name);

// optional chaining co the dung voi function

const obj2 = {
    getName() {
        return 'Alice';
    }
};

console.log(obj2.getName?.()); // Alice