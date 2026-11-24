(function () {
    "use strict";

    var section = document.getElementById("homepage-news");
    if (!section) return;

    var list = section.querySelector("ul");
    if (!list || list.children.length <= 15) return;

    var archive = document.createElement("details");
    archive.className = "news-archive";
    var summary = document.createElement("summary");
    summary.textContent = "...";
    summary.setAttribute("aria-label", "Show all news");
    summary.title = "Show all news";
    archive.appendChild(summary);

    var olderNews = document.createElement("ul");
    while (list.children.length > 15) {
        olderNews.appendChild(list.children[15]);
    }
    archive.appendChild(olderNews);
    section.appendChild(archive);
}());
