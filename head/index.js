import meta from './meta'

export default ($siteData, $themeConfig, $feedLink, page) => {
  let title = page.title;

  /*  if (is_archive()) {
      title = __('sidebar.archive');

      if (is_month()) {
        title += ': ' + page.year + '/' + page.month;
      }
      else if (is_year()) {
        title += ': ' + page.year;
      }
    }
    else if (is_category()) {
      title = __('title.category') + ': ' + page.category;
    }
    else if (is_tag()) {
      title = __('title.tag') + ': ' + page.tag;
    } TODO: Handle Route*/

  if (title) title = title + '|' + $siteData.title;
  else title = $siteData.title;

  return {
    title,
    meta: meta($siteData, $themeConfig, title, page),
    link: [
      $feedLink
    ].filter(Boolean)
  }
}