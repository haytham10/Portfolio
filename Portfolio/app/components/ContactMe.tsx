import { FC } from 'react';

interface ContactMeProps {}

export const ContactMe: FC<ContactMeProps> = () => {
 return (
   <form>
     <label>
       Name:
       <input type="text" name="name" />
     </label>
     <label>
       Email:
       <input type="email" name="email" />
     </label>
     <label>
       Message:
       <textarea name="message"></textarea>
     </label>
     <input type="submit" value="Submit" />
   </form>
 );
};