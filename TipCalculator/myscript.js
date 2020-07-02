function calculate(){
    var amount = $('#amount').val();
    var percentage = $('#percentage').val();
    var tip = amount * (percentage/100);
    var total = Number(amount) + tip;

    $('#Tip').val(tip.toFixed(2));
        $('#Total').val(total.toFixed(2));

        return false;
}

$('#Calculator').submit(calculate);





