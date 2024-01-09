import { FC } from 'react';

interface SocialMediaLinksProps {}

export const SocialMediaLinks: FC<SocialMediaLinksProps> = () => {
 return (
   <div>
     <a href="https://github.com/yourusername">GitHub</a>
     <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
     <a href="https://twitter.com/yourusername">Twitter</a>
   </div>
 );
};