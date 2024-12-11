export interface TopAccount {  
    account: string;  
    balance: string;  
  } 
  
  // Define a model for message
  export  interface Message {  
    source: string;  
    destination: string;  
    value: string;  
    fwd_fee: string;  
    ihr_fee: string;  
    created_lt: string;  
    body_hash: string;  
    msg_data: {  
      body: string;  
      init_state: string;  
    };  
    message: string;  
  } 
  
  // Define a model for transaction
  export  interface Transaction { 
    address: { 
      account_address: string; 
    };
    utime: number; 
    data: string; 
    transaction_id: { 
      lt: string; 
      hash: string; 
    }; 
    fee: string; 
    storage_fee: string; 
    other_fee: string; 
    in_msg: Message; 
    out_msgs: Message[]; 
  } 
  
  // Adjust the AccountDetails interface
  export interface AccountDetails { 
    ok: boolean; // Boolean indicating success of the response
    result: Transaction[]; // An array of transactions 
  } 