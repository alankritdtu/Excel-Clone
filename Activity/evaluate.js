let op = [] ;
let operand = [] ;

let precedence = {
    "^" : 3 ,
	"*" : 2 ,
	"/" : 2 ,
	"+" : 1 ,
	"-" : 1 
} ;

function solve(){
    let op2 = operand[operand.length-1] ;
    operand.pop() ;
    let op1 = operand[operand.length-1] ;
    operand.pop() ;
    let sign = op[op.length-1] ;

    op1 = parseInt(op1) ;
    op2 = parseInt(op2) ;

    op.pop() ;
    let ans ;
    switch (sign[0]){
      case '+' : ans = op1 + op2 ; break ;
      case '-' : ans = op1 - op2 ; break ;
      case '*' : ans = op1 * op2 ; break ;
      case '/' : ans = op1 / op2 ; break ;
    }
    operand.push(ans) ;
}
    
function infixEvaluation(s){
    op = [] ;
    operand = [] ;

    for(let i=0;i<s.length;i++){
        // s[i] is an operand
        // console.log((typeof s[i]) == "number") ;
        if(s[i].length>1 || (s[i][0]>='0' && s[i][0]<='9')){
            let x = s[i] ;
            console.log(x) ;
            operand.push(x) ;
        }
        else{
            if(s[i]=='('){
                op.push('(') ;
            }
            else if(s[i]==')'){
                while(op.top()!='('){
                    solve() ;
                }
                // pop '('
                op.pop() ;
            }
            // s[i] is an operator
            else{
                if(op.length==0 || op[op.length-1]=='('){
                    op.push(s[i]) ;
                }
                else{
                    while(op.length!=0 && precedence[s[i]]<=precedence[op[op.length-1]] && op[op.length-1]!='('){
                        solve() ;
                    }
                    op.push(s[i]) ;
                }
            }
        }
    }

    while(op.length>0){
        solve() ;
    }
    return operand[operand.length-1] + "" ;

};







