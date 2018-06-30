var search = document.querySelector(".user-navigation-search");
var search_form = search.querySelector("form");
var search_input = search_form.querySelector("[name=search]");
var placeholder = search_form.querySelector("label");


search.addEventListener("mouseover", function(evt) {
    search_input.focus();
 //   placeholder.classList.remove("visually-hidden");
 //   placeholder.classList.add("placeholder-show");
});

search.addEventListener("mouseout", function(evt) {
    if (placeholder.classList.contains("placeholder-show")) {
//        placeholder.classList.remove("placeholder-show");
//        placeholder.classList.add("visually-hidden");
    }
});

search.addEventListener("click", function(evt) {
    search_input.focus();
 //   placeholder.classList.remove("visually-hidden");
//    placeholder.classList.add("placeholder-show");
});

var user_login = document.querySelector(".user-navigation-login");
var user_form = user_login.querySelector("form");
var user_email_input = user_form.querySelector("[name=user-email]");
var user_password_input = user_form.querySelector("[name=user-password]");

var isStorageSupport = true;

var user_email_storage = "";

try {
    user_email_storage = localStorage.getItem("user_email_input");
} catch (err) {
    isStorageSupport = false;
}


user_login.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    if (user_email_storage) {
        user_email_input.value = user_email_storage;
        user_password_input.focus();
    } else {
        user_email_input.focus();
    }
});

user_form.addEventListener("submit", function (evt) {
    if (!user_email_input.value || !user_password_input.value) {
        evt.preventDefault();
        console.log("Нужно заполнить все поля формы!")
    } else {
        if (isStorageSupport) {
            localStorage.setItem("user_email_input", user_email_input.value);
        }
    }
})


var btn_contacts = document.querySelector(".btn-contacts");
var modal_feedback = document.querySelector(".modal-feedback");
var modal_overlay = document.querySelector(".modal-overlay");
var modal_close = modal_feedback.querySelector(".modal-close");
var feedback_form = modal_feedback.querySelector("form");
var feedback_user_name = modal_feedback.querySelector("[name=feedback-user-name]");
var feedback_user_email = modal_feedback.querySelector("[name=feedback-user-email]");
var feedback_user_message = modal_feedback.querySelector("[name=feedback-user-message]");

var storage1 = "";
var storage2 = "";

try {
    storage1 = localStorage.getItem("feedback_user_name");
    storage2 = localStorage.getItem("feedback_user_email");
} catch (err) {
    isStorageSupport = false;
}

btn_contacts.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_feedback.classList.add("modal-feedback-show");
    modal_overlay.classList.add("modal-show");
    if (storage1 || storage2) {
        feedback_user_name.value = storage1;
        feedback_user_email.value = storage2;
        feedback_user_message.focus();
    } else {
            feedback_user_name.focus();
    }
})

modal_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_feedback.classList.remove("modal-feedback-show");
    modal_overlay.classList.remove("modal-show");
})

feedback_form.addEventListener("submit", function (evt) {
    if (!feedback_user_name.value || !feedback_user_email.value || !feedback_user_message) {
        evt.preventDefault();
        console.log("Нужно заполнить все поля формы!")
    } else {
        if (isStorageSupport) {
            localStorage.setItem("feedback_user_name", feedback_user_name.value);
            localStorage.setItem("feedback_user_email", feedback_user_email.value);
        }
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal_feedback.classList.contains("modal-feedback-show")) {
            modal_feedback.classList.remove("modal-feedback-show");
        }
        if (modal_overlay.classList.contains("modal-show")) {
            modal_overlay.classList.remove("modal-show");
        }
    }
})