
//TABLE

$(document).ready(function() {
    var table = $('#example').DataTable({
        // "paging":   false,        
        "info":     false,
        "scrollX": true,
        "language": {
            "search": ""
          },
        
        // initComplete : function() {
        //     var input = $('.dataTables_filter input').unbind(),
        //         self = this.api(),
        //         $searchButton = $('<button class="flaticon-magnifying-glass icon"></button>')
        //                 //    .text('search')
        //                    .click(function() {
        //                       self.search(input.val()).draw();
        //                    })
               
        //     $('.dataTables_filter').append($searchButton);
        // }            
    }) 
} );


 