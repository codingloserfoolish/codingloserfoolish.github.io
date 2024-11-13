$(document).ready(function(){
    $(document).pjax('#root-node a', '#content-main', {fragment:'#content-main', timeout:8000});
    $(document).on("pjax:success",function(){
        generateArticleIndexCatalog();
        replaceArticleContentLink();
        highlightBlock();
    });
    adjustChapterBarTop();
    generateArticleIndexCatalog();
    replaceArticleContentLink();
    highlightBlock();
});

let replaceArticleContentLink=function(){
    let link_list=$("#content-main #article a");
    if(link_list.length==0)return;
    let ele=null;
    for(let i=0;i<link_list.length;++i){
        ele=$(link_list[i]);
        ele.html("<mark>"+ele.text()+"</mark>")
    }
}

let highlightBlock=function(){
    let code_blocks = $("pre code");
    if(code_blocks.length==0)return;
    for(let i=0;i<code_blocks.length;++i){
        if(!$(code_blocks[i]).hasClass("hljs")){
            hljs.highlightElement(code_blocks[i]);
        }
    }
}