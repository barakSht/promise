// השתמשו בכתובת הבאה על מנת להציג משתמש בלחיצת כפתור:
// https://randomuser.me/api/
// עצבו את המשתמש כרצונכם
// const getUser = async function () {
//     try {
//         const resp = await fetch("https://randomuser.me/api/")
//         let ans = await resp.json()
//         console.log(ans);
//         ans.results.forEach(element => {
//             console.log(element);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// const createbtn1 = document.createElement('button');
// createbtn1.innerText = 'GET USER'
// createbtn1.click(getUser())
// document.body.append(createbtn1);
// תרגול Promise ופניית GET לשרת

   
   
//    1.  השתמשו   בקריאת fetch   לכתובת   https://jsonplaceholder.typicode.com/todos   כדי   לבנות רשימה של li   עם   כל שמות ה todos.   עבור   todo   שהושלם   הציגו את שמו עם קו חוצה. כתבו   פעם אחת בעזרת then   ופעם   נוספת בעזרת async   await.

// const getUser = async function () {
//     try {
//         const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
//         let ans = await resp.json()
//         console.log(ans);
//         ans.forEach(element => {
//             const li = document.createElement('li');
//             if(!element.completed){
//                 li.innerHTML = `<s>${element.title}</s>`
//                 // li.classList.add('crosLine')
//             } else{
//                 li.innerText = element.title
//             }
//             document.body.append(li);
//             console.log(element);
//             console.log(element.title);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUser()

  
   
//   2. הציגו רשימת משתמשים שתבנה מהמידע בכתובת   https://reqres.in/api/users   בעזרת   fetch.   הרשימה   תוצג בדף עם שם פרטי,   שם   משפחה,   אימייל   אווטאר (תמונה קטנה לכל משתמש)

const getUser = async function () {
    try {
        const resp = await fetch("https://reqres.in/api/users/")
        let ans = await resp.json()
        console.log(ans);
        ans.data.forEach(element => {
            console.log(element.id);

            const userDiv = document.createElement('div');
            userDiv.classList.add('q2div')

            const h5 = document.createElement('h5');
            h5.innerText = `Full Name: ${element.first_name} ${element.last_name} \n Email: ${element.email} `
            
            const img = document.createElement('img');
            img.classList.add('q2Img') 
            img.src= element.avatar

            userDiv.append(h5);
            userDiv.append(img);
            document.body.append(userDiv);

            console.log(element);
            
        });
    } catch (error) {
        console.log(error);
    }
}
getUser()





   
   
//     3. לכל  משתמש הוסיפו לינק שבלחיצה עליו יוביל   לפרטים נוספים אודות המשתמש בעזרת Popup   על   גבי המסך.   לדוגמא,   עבור   משתמש עם id:   4, הציגו   את המידע הבא:   https://reqres.in/api/users/4








   
//    4.הציגו   את תמונות כל החתולים שתקבלו מהכתובת   הזו: https://api.thecatapi.com/v1/images/search?limit=10 הוסיפו   אפשרות למעבר בין דפים ע״י לחיצה על אחד  המספרים 1-10   ובצעו   קריאה מתאימה עם בתוספת הפרמטר page.   לדוגמא,   עבור   דף מס׳ 3   הקריאה   תהיה:
// https://api.thecatapi.com/v1/images/search?limit=10&page=3

// דוגמא   ל Pagination   של   טווח  1-3:


// בעבודה   מול פרמטרים של query   כפי   שאנו רואים כאן,   מומלץ   להיעזר ב URLSearchParams


   
//   5.  צרו   DropDown   - select שיציג   בחירה של גזעי חתולים.   את   הגזעים ניתן לקבל מכאן:
//    https://api.thecatapi.com/v1/breeds

// היעזרו   ב id,   name של   כל גזע.
//    בכל   בחירה של גזע מסוים תתבצע קריאה מתאימה   לכאן:
// https://api.thecatapi.com/v1/images/search?breed_ids=breed-id

// (החליפו   את breed-id   ב   id   המתאים   למה שנבחר מה DropDown)

// הציגו   לכל גזע תמונת אחת של חתול תואם.



// להסבר   נוסף עיינו כאן: https://docs.thecatapi.com/example-by-breed