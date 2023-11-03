// FETCH CRUD
//FETCH GET
// fetch('https://northwind.vercel.app/api/categories')
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         const p = document.createElement('p')
//         p.textContent = `${item.name} - ${item.description} - ${item.id}`
//         categoriesDiv.appendChild(p)
//     })
// })

//FETCH POST

// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/categories', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: inpOne.value,
//             description: inpTwo.value
//            }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data gonderildi" + data);
//           });
// })

//FETCH DELETE

// function FetchDel() {
//         let url = `https://northwind.vercel.app/api/categories/${ido.value}`;

//         fetch(url, {
//           method: "DELETE",
//         }).then((res) => console.log(res));
//       }

// btn.addEventListener('click', FetchDel)

//FETCH UPDATE ====---------- PUT === PATCH

//AXIOS CRUD



//AXIOS GET MEthod

// axios.get("https://northwind.vercel.app/api/categories/")
// .then((res) => {
    //   console.log(res.data);
    // });
    
    
    // AXIOS POST method
    // function fetchPost () {
        //     axios.post("https://northwind.vercel.app/api/categories/", {
            //     name: inpOne.value,
            //     description: inpTwo.value
            // }).then(res => {
                //     console.log(res);
                // })
                // }
                
                
                // btn.addEventListener('click', fetchPost)
                
//AXIOS DELETE Method

const categoriesDiv = document.getElementById("cate");
const inpOne = document.getElementById("inpOne");
const inpTwo = document.getElementById("inpTwo");
const btn = document.getElementById("btn");
const ido = document.getElementById("idO");



// function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/categories/${ido.value}`)
// }
// btn.addEventListener('click', axiosDelete)