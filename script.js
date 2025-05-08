let arrayCard = []

const cardContainer = document.getElementById("cardContainer");
const form = document.getElementById("myForm");

function addProject (e) {
    e.preventDefault();
    
    let projectName = document.getElementById("projectName").value;
    let startDate = new Date (document.getElementById("startDate").value);
    let endDate = new Date (document.getElementById("endDate").value);
    let description = document.getElementById("description").value;
    let nodeJs = document.getElementById("nodeJs").checked;
    let nextJs = document.getElementById("nextJs").checked;
    let reactJs = document.getElementById("reactJs").checked;
    let typeScript = document.getElementById("typeScript").checked;
    let imageInput = document.getElementById("inputImg");
    let image = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : "";

    if (!projectName || !startDate || !endDate || !description || imageInput.files.length === 0) {
        alert("Please fill in all required fields and upload an image.");
        return;
    }

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    const durationInMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    let project = {
        projectName,
        startYear,
        durationInMonths,
        description,
        nodeJs,
        nextJs,
        reactJs,
        typeScript,
        image
    }

    arrayCard.push(project)
    addCard()
    form.reset()
}

function addCard() {
    cardContainer.innerHTML = "";

    for(i = 0; i <arrayCard.length; i++){
        let card = document.createElement("div");
        card.classList.add("card")
        card.style.width = "22rem"

        let iconsHtml = "";
        if (arrayCard[i].nodeJs == true) {
            iconsHtml += `<i class='bx bxl-nodejs bx-md'></i>`;
        }
        if (arrayCard[i].nextJs == true) {
            iconsHtml += `<i class='bx bxs-share bx-md'></i>`;
        }
        if (arrayCard[i].reactJs == true) {
            iconsHtml += `<i class='bx bxl-react bx-md'></i>`;
        }
        if (arrayCard[i].typeScript == true) {
            iconsHtml += `<i class='bx bxl-typescript bx-md'></i>`;
        }

        card.innerHTML = `
        <div class="card pb-2 px-1" style="width: 22rem;">
        <img class="py-2 px-2" src="${arrayCard[i].image}" class="card-img-top">
        <div class="card-body d-flex flex-column justify-content-between">
            <h6 class="card-title fw-bold">${arrayCard[i].projectName} - ${arrayCard[i].startYear}</h6>
            <p class="text-light-emphasis">durasi : ${arrayCard[i].durationInMonths} Bulan</p>
            <p class="card-text">${arrayCard[i].description}</p>
            <div id="icon-container" class="d-flex px-2 mb-3 gap-1">
             ${iconsHtml}
            </div>
                <div class="d-flex gap-2">
                    <a href="#" class="btn btn-dark w-50 fw-bold">edit</a>
                    <a href="#" class="btn btn-dark w-50 fw-bold">delete</a>
                </div>
            </div>
            </div>
        `;
        cardContainer.appendChild(card);
    }
}


