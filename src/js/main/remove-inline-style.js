
$( document ).ready(function() {
    $(".vacance__details--text dd,.vacance__details--text dd span,.vacance__details--text dd strong, .vacance__details--text dd strong span, .vacance__details--text dt,.vacance__details--text dt span,.vacance__details--text dt strong, .vacance__details--text dt strong span, .vacance__details--text p,.vacance__details--text p span, .vacance__details--text p strong, .vacance__details--text p strong span").each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '','.').length <= 1)
            $this.remove();
    });
    $(".vacance__details--text dd,.vacance__details--text dd span,.vacance__details--text dd strong, .vacance__details--text dd strong span, .vacance__details--text dt,.vacance__details--text dt span,.vacance__details--text dt strong, .vacance__details--text dt strong span, .vacance__details--text p,.vacance__details--text p span, .vacance__details--text p strong, .vacance__details--text p strong span").each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '','.').length <= 1)
            $this.remove();
    });
    $(".vacance__details--text dd,.vacance__details--text dd span,.vacance__details--text dd strong, .vacance__details--text dd strong span, .vacance__details--text dt,.vacance__details--text dt span,.vacance__details--text dt strong, .vacance__details--text dt strong span, .vacance__details--text p,.vacance__details--text p span, .vacance__details--text p strong, .vacance__details--text p strong span").each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '','.').length <= 1)
            $this.remove();
    });
    $(".vacance__details--text dd,.vacance__details--text dd span,.vacance__details--text dd strong, .vacance__details--text dd strong span, .vacance__details--text dt,.vacance__details--text dt span,.vacance__details--text dt strong, .vacance__details--text dt strong span, .vacance__details--text p,.vacance__details--text p span, .vacance__details--text p strong, .vacance__details--text p strong span").each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '','.').length <= 1)
            $this.remove();
    });
    $(".vacance__details--text dd,.vacance__details--text dt,.vacance__details--text p,.vacance__details--text span,.vacance__details--text strong, .vacance__details--text ul li, .vacance__details--text h1, .vacance__details--text h2, .vacance__details--text h3, .vacance__details--text h4, .vacance__details--text h5, .vacance__details--text h6").find("a,p,span,strong,h1,h2,h3,h4,h5,h6,dd,dt").contents().unwrap();
    $(".vacance__details--text dd,.vacance__details--text dt,.vacance__details--text p,.vacance__details--text span,.vacance__details--text strong, .vacance__details--text ul li,.vacance__details--text h1, .vacance__details--text h2, .vacance__details--text h3, .vacance__details--text h4, .vacance__details--text h5, .vacance__details--text h6").removeAttr("style");
    

});
