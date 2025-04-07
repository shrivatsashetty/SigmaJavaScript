function getNotation (num) {
    let conciseNum;
    if (num < 1e3)
        return num.toString();
    else if(1e3 <= num && num < 1e6) {
        conciseNum = (num/1e3).toString();
        return conciseNum.concat("K");
    }
    else if(1e6 <= num && num < 1e9) {
        conciseNum = (num/1e6).toString();
        return conciseNum.concat("M");
    }
    else if(1e9 <= num && num < 1e12) {   
        conciseNum = (num/1e9).toString();
        return conciseNum.concat("B");
    }
    else {
        conciseNum = (num/1e12).toString();
        return conciseNum.concat("T");
    }
}

function createCard(cardTitle, channelName, numViews, monthsOld, videoDuration, thumbnailLink ) {
    
    document.querySelector(".img-tumbnail").src = thumbnailLink;
    document.querySelector(".timestamp").innerText  = videoDuration;
    document.querySelector(".card-heading").innerText = cardTitle;

    let videoInfo = document.querySelector(".card-info").children;
    videoInfo[0].innerText = channelName;
    videoInfo[1].innerText = getNotation(numViews);
    videoInfo[2].innerText = monthsOld;
}


// remote url for the thumbnail of video 73
let thumbnailUrl = "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"
let newTimeStamp = "10:10"
let newHeading = "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73"
let newChannelName = "ProgrammingWithShetty";
let newViewCount = 30_000_000;
let monthsOld = 5;

createCard(newHeading, newChannelName, newViewCount, monthsOld, newTimeStamp, thumbnailUrl);