// Selectors
let videoplayer = document.querySelector("#video-player");
let videourl1 = document.querySelector("#video-url");
let watchbutton = document.querySelector("watch-button");

let noteinput = document.querySelector("note");
let saveButton = document.querySelector("save-button");
let notelist = document.querySelector("save-button");
let noNotestext = document.querySelector("#no-notes-text");

//event listening
saveButton.addEventListener("click",function ()
{
    let note = noteinput.value;

    if (note !== "") {
         
        // Manipulation
        let noteItem = document.createElement("li");
        noteItem.textContent = note;
        noteItem.classList.add("bg-gray-100", "p-2", "mt-2");
        noteslist.appendchild(noteitem);

        Noteslist.appendchild(noteiTem);

    }
} );

watchButton.addEventListener('click', function () {
    let url = videoUrl.value;

    if (url !== '') {

        let videoID = extractVideoID(url);
        videoPlayer.src = 'https://www.youtube.com/embed/' + videoID;
        videoPlayer.classList.remove('h-0');
        videoPlayer.classList.add('h-[200px]', 'md:h-[400px]', 'w-full');
        videoUrl.value = '';
    }

});