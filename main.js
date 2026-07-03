

//ادخال البينات بمصفوفه D2
const values =[
['ID',1,2,3,4,5], 
['BookTitle','start','good day','clean Code','zero','year of 2044'],
 ['Author','Simon SinekJ', 'Clark Scott','Robert CecilMartin','Peter Thie','Kyle Simpson'] 
 ,['Price',80.0,59.9,50.0,45.0,39.9] 
 ,['Quantity',13,22,5,12,9]
];
//console.log(values[0][1]); //بس تاكد ان الكود صحيح ويعمل
  

// البحث برقم ID
const id= 5;//  في كل مره اذا بني نبحث بالاي دي نحط الرقم الي نبي لان حطينا من الثوابت الي مايتغيرو طول البرنامج وهو فقط مخصص للوب الاولى

for (let i = 1; i < values[0].length; i++) { //ابدا العد من واحد،يعني استمري في التكرار طالما ،i أصغر من طول صف الـ ID.
    if (values[0][i] === id) {//عني: “هات العنصر الموجود في الصف الأول والعمود رقم i.  هل الاي دي الي حطيته ==  اي؟ بيمر عليهم كلهم بس ماراح يطبعهم الين يتحقق شرط المساواه
        console.log("ID: " + values[0][i]);//في الصف صفر عمود ١ هل ساوت(id)  في الرقم؟ اطبعها
        console.log("Title: " + values[1][i]);//  في الصف واحد و العامودواحد هل تساوى (i) مع (id)
        console.log("Author: " + values[2][i]);
        console.log("Price: " + values[3][i]);
        console.log("Quantity: " + values[4][i]);
     
    }
}

// function البحث باسم الكتاب باستخدام 
function searchByTitle(TitleName){ //  حطيت داله باسم (ابحث باستخدام اسم الكتاب ) وحطيت داخلها متغير اسمه (اسم الكتاب)

for (let i = 1; i < values[0].length; i++) {
    if (values[1][i] === TitleName) { //هنا بحثنا باسم الكتاب عشان كذا زودنا واحد للاقواس الاولى، وايضا البرنامج يقارن النص المكتوب بالنص عشان يتاكد انه مساوي للشرط
        console.log("ID: " + values[0][i]);//مر على الف صفر 
        console.log("Title: " + values[1][i]);
        console.log("Author: " + values[2][i]);
        console.log("Price: " + values[3][i]);
        console.log("Quantity: " + values[4][i]);
    }
}

}
searchByTitle('clean Code');


// function البحث باسم الكاتب باستخدام 
 function searchByAuthor(Author){

for (let i = 1; i < values[0].length; i++) {
    if (values[2][i] === Author) {
        console.log("ID: " + values[0][i]);
        console.log("Title: " + values[1][i]);
        console.log("Author: " + values[2][i]);
        console.log("Price: " + values[3][i]);
        console.log("Quantity: " + values[4][i]);
    }
}

}
searchByAuthor('Clark Scott');

// داله اضافه كتاب باستخدام بوش 
function addBook(id, title, author, price,quantity) {
values[0].push(id);
values[1].push(title);
values[2].push(author);
values[3].push(price);
values[4].push(quantity);

}
addBook(6,"newbook","newauthor",100,10);
console.log(values);

//داله تعديل على الكتاب باستخدام 
function updateBook(id, newTitle, newAuthor, newPrice, newQuantity) {// انا ابي الاتعديل يكون في الصف الثالث ف عوضت المتغير اي دي ب ثلاثه وحطيته ضمن الشرط
    for (let i = 1; i < values[0].length; i++) {
        if (values[0][i] === id) {
            values[1][i] = newTitle;
            values[2][i] = newAuthor;
            values[3][i] = newPrice;
            values[4][i] = newQuantity;

        }
    }
}

updateBook(5, "year of 2044 Updated", "Kyle Simpson Updated", 55, 7);
       console.log(values);

            console.log("Book updated successfully");
    //الحذف باستخدام داله بوب
    //قام بحذف  اخر تعديل سويته الي هو اضافه كتاب جديد
function deleteBook() {
   
            values[0].pop();
            values[1].pop();
            values[2].pop();
            values[3].pop();
            values[4].pop();

        }


deleteBook();
console.log(values);
  console.log("Book deleted successfully");