// initilizing
/* ------------------------------- main money ------------------------------- */
var mainamount=1000;
document.getElementById('money').innerHTML=mainamount;
/* ------------------------------- main money ------------------------------- */
function money(){
    let buymoney=document.getElementById('money').innerHTML;
    buymoney=parseInt(buymoney);
    buymoney+=100;
    document.getElementById('money').innerHTML=buymoney;
}

//Roll
function roll(){
    var yourmoney= document.getElementById('money').innerHTML;
    yourmoney=parseInt(yourmoney);
    var yourmoneycopy=yourmoney;
    var money=[];
    money[1]=document.getElementById('one').value;
    money[2]=document.getElementById('two').value;
    money[3]=document.getElementById('three').value;
    money[4]=document.getElementById('four').value;
    money[5]=document.getElementById('five').value;
    money[6]=document.getElementById('six').value;
    //Str into Float
    for(var i=1;i<=6;i++){
        if(money[i]==""){
            money[i]=0;
        }
        money[i]=parseInt(money[i]);
    }
    summoney=0;
    for(i=1;i<=6;i++){
        if(money[i]<0){
            alert('Money Can not be negetive.It taken as zero.');
            money[i]=0;
        }
    }
    for(var j=1;j<=6;j++){
        summoney=summoney+money[j];
    }
    if(summoney==0){
        alert("Please Enter a money");
    }
    else if(summoney>yourmoney){
        alert("You Don't have enough Money.");
        // summoney=yourmoney;
    }
    // alert(summoney);
    // Computer turn
    
    else{
    const randomno=Math.floor(Math.random()*6)+1;
    // const randomno=1;
    document.getElementById('diceimg').src="img/"+randomno+".png";
    for(i=1;i<=6;i++){
        if(i==randomno){
            yourmoney=yourmoney-money[i];
            yourmoney=yourmoney+ money[i]*6;
        }
        else{
            yourmoney=yourmoney-money[i];
        }
    }
    // alert(yourmoney);
    document.getElementById('money').innerHTML=yourmoney;
    let diffmoney=0;
    if(yourmoney>yourmoneycopy){
        diffmoney=yourmoney-yourmoneycopy;
        document.getElementById('profitloss').innerHTML=`(Profit - &#8377;${diffmoney})`;
        document.getElementById('profitloss').style.color="green";
    }
    else if(yourmoney==yourmoneycopy){
        document.getElementById('profitloss').innerHTML=`(No Profit No Loss!)`;
        document.getElementById('profitloss').style.color="black";
    }
    else{
        diffmoney=yourmoneycopy-yourmoney;
        document.getElementById('profitloss').innerHTML=`(Loss - &#8377;${diffmoney})`;
        document.getElementById('profitloss').style.color="red";
    }
//init inputs
    for(i=1;i<=6;i++){
        money[i]=0;
    }
    document.getElementById('one').value=null;
    document.getElementById('two').value=null;
    document.getElementById('three').value=null;
    document.getElementById('four').value=null;
    document.getElementById('five').value=null;
    document.getElementById('six').value=null;
}
}

function reset(){
    yourmoney=mainamount;
    document.getElementById('money').innerHTML=yourmoney;
    for(i=1;i<=6;i++){
        money[i]=0;
    }
    document.getElementById('one').value=null;
    document.getElementById('two').value=null;
    document.getElementById('three').value=null;
    document.getElementById('four').value=null;
    document.getElementById('five').value=null;
    document.getElementById('six').value=null;
    document.getElementById('profitloss').innerHTML="(Make your Money 6X)";
    document.getElementById('profitloss').style.color="dodgerblue";
}