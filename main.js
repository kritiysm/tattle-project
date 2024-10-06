let Projectsdiv = document.querySelector(".Projectsdiv")
let viralSpiraldiv = document.querySelector(".viralSpiraldiv")
let body = document.querySelector(".body")
let contener = document.querySelector("#contaner")
let para = document.querySelector("#para")
let heading= document.querySelector("#mainhead")
let year = document.querySelector("h3")
let image = document.querySelector("image")
 fetch("./data.json")
    .then((response) =>response.json()
    .then((data) =>{
      console.log(data)
      year.textContent = data[0].year
      heading.textContent = data[0].heading
      para.textContent = data[0].para
     
      let container = document.querySelector("#contaner")
      data.forEach(function(data){
        const box = document.createElement('div')
        box.setAttribute("id","box") 
        container.appendChild(box)

         const year= document.createElement('h3')
         year.textContent =  data.year;
        box.appendChild(year);
        

        const heading= document.createElement('h4')
        heading.textContent = data.heading
        box.appendChild(heading)

        const image = document.createElement('img')
        image.src = data.image
        box.appendChild(image)

        const para= document.createElement('p')
        para.textContent = data.para
        box.appendChild(para)
        para.setAttribute("id","para")

        // const linkP = document.createElement('A')
        // const t = document.createTextNode("Read More")
        // linkP.setAttribute("href","https://www.youtube.com/watch?v=g2rlQUdHJYA")
        // linkP.appendChild(t)
        // console.log(linkP)
        // box.appendChild(linkP)
        // // document.body.appendChild(link-p)

        
      });
      console.log(body)
    }));

    

