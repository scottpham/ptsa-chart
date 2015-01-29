//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key = "1_eiuLz5h14cW2IlXjAhoxrEBtK7BjthscISvjLLwaeA";


//"data" refers to the column name with no spaces and no capitals
	//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [ 
    { "data": "expenses", "title": "Expenses" },
    { "data": "year2010", "title": "2010-2011" },
    { "data": "year2011", "title": "2011-2012" },
    { "data": "year2012", "title": "2012-2013" },
    { "data": "total", "title": "Total" }];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
		//use bootstrap css to customize table style: http://getbootstrap.com/css/#tables 
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="table table-condensed table-bordered table-striped table-hover" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        $("#mySelection").DataTable({
            "data": data,
            "columns": columns, 
            "order":[[4, "desc"]], //order on 1st column
            "pagingType": "simple", //no page numbers
			//uncomment these options to simplify your table
			"paging": false,
			"searching": false,
			"info": false,
            "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                // console.log(aData["expenses"]);
                console.log($(nRow));
                if (aData["expenses"] == "No supporting receipts/documents"){
                    $(nRow).addClass("emphasis");

                }
            }
            
            });

    

        }

    // $(document).ready( function() {
    //   $('#graphic').dataTable( {
    //     "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
    //       // Bold the grade for all 'A' grade browsers
    //       if ( aData[0] == "No supporting receipts/documents" )
    //       {
    //         //$('td:eq(4)', nRow).html( '<b>A</b>' );
    //       }
    //     }
    //   } );
    // } );



});
//end of writeTable



