/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// TODO Import the source directory paths from external file
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Caleb's Corner",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Python Data`,
        path: `E:/Users/User Name/Documents/a_code/a_job_prep/reactjs/gatsby/ccornerPython/ccornerData`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `E:/Users/User Name/Documents/a_code/a_job_prep/reactjs/gatsby/ccornerPython/ccornerData`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDYHyt5UdFJ3QgHRsrVox_nknN-ihUr0mY",
          authDomain: "ccorner-4bca7.firebaseapp.com",
          databaseURL: "https://ccorner-4bca7.firebaseio.com",
          projectId: "ccorner-4bca7",
          storageBucket: "ccorner-4bca7.appspot.com",
          messagingSenderId: "884213770083",
          appId: "1:884213770083:web:881dcd6b351ac9f958d556"
        }
      }
    }
  ],
}