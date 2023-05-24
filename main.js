
var id = 2
var selectedId = 0;
var cardsData = [
    {
        id: 0,
        imgSrc: './assets/img/camel.jpeg',
        cardTitle: 'Egypt Tangbia',
        cardSubtitle: 'Debatibus et magnis dis parturient montes, nascetur ridiculus mus',
        date: 'Aug5, 2013',
        no_comments: '22',
        comments: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni commodi facere earum distinctio esse.Temporibus, saepe magnam odit qui dolor accusamus deleniti dolorum eum debitis repellat, adipisci eos similique ? ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex, magni commodi facere earum distinctio esse.Temporibus, saepe magnam odit qui dolor accusamus deleniti dolorum eum debitis repellat, adipisci eos similique ? ']
    },
    {
        id: 1,
        imgSrc: './assets/img/camel.jpeg',
        cardTitle: 'Tangbia',
        cardSubtitle: 'Debatibus et magnis dis parturient montes, nascetur ridiculus mus',
        date: 'Aug5, 2013',
        no_comments: '22',
        comments: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni commodi facere earum distinctio esse.Temporibus, saepe magnam odit qui dolor accusamus deleniti dolorum eum debitis repellat, adipisci eos similique ? ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex, magni commodi facere earum distinctio esse.Temporibus, saepe magnam odit qui dolor accusamus deleniti dolorum eum debitis repellat, adipisci eos similique ? ']
    },
    {
        id: 2,
        imgSrc: './assets/img/camel.jpeg',
        cardTitle: 'Egypt',
        cardSubtitle: 'Debatibus et magnis dis parturient montes, nascetur ridiculus mus',
        date: 'Aug5, 2013',
        no_comments: '22',
        comments: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni commodi facere earum distinctio esse.Temporibus, saepe magnam odit qui dolor accusamus deleniti dolorum eum debitis repellat, adipisci eos similique ? ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex, magni commodi facere earum distinctio esse.Temporibus, saepe magnam odit qui dolor accusamus deleniti dolorum eum debitis repellat, adipisci eos similique ? ']
    }
]

var row = $('#insert-here');
var modal = $('.my-modal');
var modalHeading = $('.modal-heading');
var modalTitle = $('.modal-heading > .my-modal-tite');
var cardTemplate = '<div class="col-md-3"> <div class="card place rounded-0" > <div class="card-img-top place-img-top"> <img src="{{imgSrc}}" class="img-fluid w-100" alt="" /> </div> <div class="card-body place-body text-center"> <button class="card-title place-title border-0 btn" id="{{id}}"> {{cardTitle}} </button> <h6 class="card-subtitle place-subtitle">{{cardSubtitle}}</h6> </div> <div class="place-footer d-flex justify-content-between border-top-0 p-3" > <div> <i class="fa-solid fa-calendar"></i> <span>{{date}}</span> </div> <div> <i class="fa-solid fa-comments"></i> <span>{{no_comments}}</span> <span> Comments</span> </div> </div> </div> </div>';

for (var i = 0; i < cardsData.length; i++) {
    var card = bindData(cardsData[i], cardTemplate);
    var cardElement = $(card);
    cardElement.find('button').on('click', (e) => {
        modal.show();
        var card = cardsData.find((cardData) => cardData.id == e.target.id);
        modal.find('img').attr('src', card.imgSrc);
        modalTitle = $("<p class='my-modal-tite'></p>");
        modalTitle.text(card.cardTitle);
        modalHeading.append(modalTitle);
        card.comments.forEach(comment => {
            var text = $("<p></p>").text(comment);
            modalHeading.append(text);
        });
    })
    row.append(cardElement);
}
function closeModal() {
    modal.hide();
    modalHeading.find('p').remove();
}
function bindData(data, template) {
    for (var prop in data) {
        template = template.replace("{{" + prop + "}}", data[prop]);
    }
    return template;
}

$(document).ready(function () {
    modal.hide();
})