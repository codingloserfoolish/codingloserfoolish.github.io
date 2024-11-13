let adjustScrollOffset=function(){
    let link_list=$(".article-index-area a[href^='#']");
    if(link_list.length==0)return;
    link_list.on('click', function(e) {
        e.preventDefault();
        let target = $($(this).attr('href'));
        let offset=target.offset().top-56;
        if(document.documentElement.offsetHeight-offset<window.innerHeight){
            offset=document.documentElement.offsetHeight-window.innerHeight;
        }
        document.documentElement.scrollTop=offset;
      });
}

let generateArticleIndexCatalog=function(){
    let children=$("#content-main #article").children();
    if(children.length==0)return;
    let article_index_area=$(".article-index-area ul");
    article_index_area.empty();
    let node=null;
    for(let i=0;i<children.length;++i){
        node=$(children[i]);
        if(node.is("h1")){
            node.before("<span id='jump-link-"+i+"'></span>");
            article_index_area.append("<li class='nav-item'><a class='nav-link' href='#jump-link-"+i+"'>"+node.text()+"</a></li>");
        }
    }
    adjustScrollOffset();
}