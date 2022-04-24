import { useSiteMetadatas } from '../tools/useSiteMetadatas'

const defaultSchema = () => {
  const { cardImage, imgHolder, site } = useSiteMetadatas()

  const {
    description,
    keywords,
    siteUrl,
    dateCreated,
    organization,
    themeColor,
  } = site.siteMetadata
  return {
    schemaType: 'Blog',
    startedWebsiteDate: dateCreated,
    pageTitle: `Boileplate`,
    pageDescription: description,
    authorWebsiteData: organization.url,
    authorPostData: organization.name,
    highlightImage: cardImage,
    brandMainLogo: imgHolder,
    brandCardLogo: imgHolder,
    brandPhone: organization.phone,
    brandEmail: organization.email,
    brandName: organization.name,
    brandSocialArr: {
      instagram: 'https://www.instagram.com/descola_',
      facebook: 'https://www.facebook.com/descola_',
      linkedIn: 'https://www.linkedin.com/company/descola_',
      youtube: 'asd',
    },
    buildServerUrl: siteUrl,
    websiteLanguage: 'pt-BR',
    brandThemeColor: themeColor,
    brandKeywords: keywords,
    brandWebsiteUrl: siteUrl,
  }
}

export { defaultSchema }
