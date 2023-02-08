import { composeResolvers } from '@graphql-tools/resolvers-composition';
import { authenticate } from '../middleware/authenticatetoken';
import { Resolvers } from '../generated/graphql';
import gql from 'graphql-tag';
import _ from 'lodash';
import { v4 } from 'uuid';

export const leaveTypedef = gql`
input leave{
 id: String            
 leavetype_id: String             
 start_date: Date
 end_date: Date
 quantity_day: String
 detail_leave: String 
 Status: Int                
 user_id: String
}


type leave_data{
 id: String            
 leavetype_id: String            
 leave_type: leave_type    
 start_date: Date
 end_date: Date
 quantity_day: String
 detail_leave: String 
 Status: Int                
 user_id: String            
 user:  User              
}

type leave_type{
  id: String 
  name: String
  orderby: Int       
}

`