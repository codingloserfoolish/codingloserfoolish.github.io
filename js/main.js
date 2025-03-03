window.onload=function(){
    let doc=$(document);
    doc.pjax('#ChapterCatelog a', '#article-content', {fragment:'#article-content', timeout:8000});
    doc.on("pjax:success",function(){
        generateArticleCatalog();
        highlightBlock();
    });
    generateArticleCatalog();
    highlightBlock();
};


let highlightBlock=function(){
    let code_blocks = $("pre code");
    if(code_blocks.length==0)return;
    code_blocks.each(function(){
        let node=$(this);
        if(!node.hasClass("hljs")){
            hljs.highlightElement(this);
        }
    });
}
let generateArticleCatalog=function(){
    let h2_title=$('#article-content h2');
    let article_catelog=$('#article-catelog ul');
    article_catelog.empty();
    if(h2_title.length==0)return;
    let node=null;
    let link=0;
    h2_title.each(function(){
        node=$(this);
        node.before(`<span id='jump-link-${link}'></span>`);
        article_catelog.append(`<li><a href='#jump-link-${link}'>${node.text()}</a></li>`);
        ++link;
    });
}