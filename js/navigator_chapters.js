let adjustChapterBarTop=function(){
    let nav_main=$("#nav-main");
    let chapter_bar=$(".avoid-nav-head");
    if(chapter_bar.length==0||nav_main.length==0)return;
    chapter_bar.css("top",nav_main.outerHeight()+"px");
}