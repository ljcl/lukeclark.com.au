import CMS from 'netlify-cms';

import PostPreview from './preview-templates/PostPreview';

CMS.registerPreviewTemplate('blog', PostPreview);
