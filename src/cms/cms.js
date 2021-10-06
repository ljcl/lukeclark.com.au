import CMS from 'netlify-cms-app';

import PostPreview from './preview-templates/PostPreview';

CMS.registerPreviewTemplate('blog', PostPreview);
