import { Octokit } from '@octokit/rest';
import { string } from 'astro/zod';

export interface MarkDownRenderer {
    render(): Promise<string>;
}



/**
 * *******************************************************************
 * *******************************************************************
 * *********  GITHUB RENDERER
 * *******************************************************************
 * *******************************************************************
 */
export class GithubRenderer implements MarkDownRenderer {
    name?: string; // string or undefined
    /**
     * The URL of the markdown to fetch from github.com
     * eg : https://raw.githubusercontent.com/andreasbm/readme/master/README.md
     */
    url?: string; // string or undefined

    constructor(name?: string, url?: string) {
        this.name = name || 'Github';
        this.url = url || 'https://raw.githubusercontent.com/andreasbm/readme/master/README.md';
    }

    async render(): Promise<string> {
        this.checkRequirements();
        console.log(' ****>>*>*>>*>*>>*>*>>*>*>>*>*>>*>');
        console.log(` ****>>*> RENDERING MARKDOWN WITH THE [${this.name}] provider`);
        console.log(' ****>>*>*>>*>*>>*>*>>*>*>>*>*>>*>');


        // const example1Md = `https://raw.githubusercontent.com/andreasbm/readme/master/README.md`

        const markeddowResponse = await fetch(`${this.url}`, {});
        // fetch('https://raw.githubusercontent.com/erasabi/trekthroughs/master/pen_testing/RickdiculouslyEasy.md')
        const markeddowResponseData = await markeddowResponse.text();
        // const markeddowResponseData = markeddowResponse.json();

        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // OCTOKIT -+- OCTOKIT 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        //
        //  We render the Markdown using he Github Renderer throuh the Github API : to improve the rendering and get as close as possible from the original README
        //  That's why the only thing to do is to use the Gitlab Renderer,n, if we use gitlab
        //
        // -
        //    pnpm add -D octokit @types/octokit @octokit/rest
        // - 
        // const octokit = new Octokit();
        // Octokit.js
        // https://github.com/octokit/core.js#readme
        const octokit = new Octokit({
            auth: `${process.env.FORGES_GITHUB_PAT_TOKEN}`
        }) // FORGES_GITHUB_PAT_TOKEN : Github Personal Access Token

        console.log(` <><><><><><>The 3Forges Github Token value is : ${process.env.FORGES_GITHUB_PAT_TOKEN}`)

        const githubRenderedMd = await octokit.request('POST /markdown', {
            text: `${markeddowResponseData}`,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        console.log(githubRenderedMd)
        return githubRenderedMd.data;

    } /// END OF RENDER() METHOD
    checkRequirements(): void {
        /**
         * check FORGES_GITHUB_PAT_TOKEN is set.
         */
        let forges_github_pat_token = process.env.FORGES_GITHUB_PAT_TOKEN || '';
        if ( forges_github_pat_token == '' ) {
            throw new Error(` The FORGES_GITHUB_PAT_TOKEN env. var. is not set, but it must be set. Set it to the value of your Github Personal Access Token`)
        }
        /**
         * check FORGES_GITHUB_PAT_TOKEN is set.
         */
            
        let markdownUrl = this.url || '';
        if ( markdownUrl == '' ) {
            throw new Error(` The url of the ${this.name} Renderer is not set, but it must be set`)
        }
    }
}



/**
 * https://docs.gitlab.com/ee/api/markdown.html
 * curl --request POST --header "PRIVATE-TOKEN: <your_access_token>" \
 * --header "Content-Type:application/json" \
 * --data '{"text":"Hello world! :tada:", "gfm":true, "project":"group_example/project_example"}' "https://gitlab.example.com/api/v4/markdown"
 * *******************************************************************
 * *******************************************************************
 * *********  GITLAB RENDERER
 * *******************************************************************
 * *******************************************************************
 */
export class GitlabRenderer implements MarkDownRenderer {
    name?: string; // string or undefined
    /**
     * The URL of the markdown to fetch from github.com
     * eg : https://raw.githubusercontent.com/andreasbm/readme/master/README.md
     */
    url?: string; // string or undefined

    constructor(name?: string, url?: string) {
        this.name = name || 'Gitlab';
        this.url = url || 'https://gitlab.in2p3.fr/lea.pamphile/exam_as_pamphile_lea/-/raw/master/README.md';
    }

    async render(): Promise<string> {
        this.checkRequirements();
        console.log(' ****>>*>*>>*>*>>*>*>>*>*>>*>*>>*>');
        console.log(` ****>>*> RENDERING MARKDOWN WITH THE [${this.name}] provider`);
        console.log(' ****>>*>*>>*>*>>*>*>>*>*>>*>*>>*>');


        // const example1Md = `https://gitlab.in2p3.fr/lea.pamphile/exam_as_pamphile_lea/-/raw/master/README.md`

        const markeddowResponse = await fetch(`${this.url}`, {});
        // fetch('https://gitlab.in2p3.fr/lea.pamphile/exam_as_pamphile_lea/-/raw/master/README.md')
        const markeddowResponseData = await markeddowResponse.text();
        // const markeddowResponseData = markeddowResponse.json();

        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // OCTOKIT -+- OCTOKIT 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        //
        //  We render the Markdown using he Github Renderer throuh the Github API : to improve the rendering and get as close as possible from the original README
        //  That's why the only thing to do is to use the Gitlab Renderer,n, if we use gitlab
        //
        // -
        //    pnpm add -D octokit @types/octokit @octokit/rest
        // - 
        // const octokit = new Octokit();
        // Octokit.js
        // https://github.com/octokit/core.js#readme
        const octokit = new Octokit({
            auth: `${process.env.FORGES_GITHUB_PAT_TOKEN}`
        }) // FORGES_GITHUB_PAT_TOKEN : Github Personal Access Token

        console.log(` <><><><><><>The 3Forges Github Token value is : ${process.env.FORGES_GITHUB_PAT_TOKEN}`)

        const githubRenderedMd = await octokit.request('POST /markdown', {
            text: `${markeddowResponseData}`,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        console.log(githubRenderedMd)
        return githubRenderedMd.data;

    } /// END OF RENDER() METHOD
    checkRequirements(): void {
        /**
         * check FORGES_GITHUB_PAT_TOKEN is set.
         */
        let forges_github_pat_token = process.env.FORGES_GITHUB_PAT_TOKEN || '';
        if ( forges_github_pat_token == '' ) {
            throw new Error(` The FORGES_GITHUB_PAT_TOKEN env. var. is not set, but it must be set. Set it to the value of your Github Personal Access Token`)
        }
        /**
         * check FORGES_GITHUB_PAT_TOKEN is set.
         */
            
        let markdownUrl = this.url || '';
        if ( markdownUrl == '' ) {
            throw new Error(` The url of the ${this.name} Renderer is not set, but it must be set`)
        }
    }
}






const aSupprimer = () : void => {

}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/// 
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
/// 
// Example POST method implementation:
/// 
export async function postData(url: string, data: any, headers: any): Promise<string> {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        /* headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },*/
        headers: headers,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
  
/*  const resultingHttpResponse = await postData("https://example.com/answer", { answer: 42 }, {}).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
*/
  
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////













/**
 * *******************************************************************
 * *******************************************************************
 * *********  GITEA RENDERER
 * *******************************************************************
 * *******************************************************************
 */
export class GiteaRenderer implements MarkDownRenderer {
    name?: string; // string or undefined
    /**
     * The URL of the markdown to fetch from github.com
     * eg : https://gitea.com/gitea/helm-chart/raw/branch/main/README.md
     */
    url?: string; // string or undefined

    constructor(name?: string, url?: string) {
        this.name = name || 'Gitea';
        this.url = url || 'https://gitea.com/gitea/helm-chart/raw/branch/main/README.md';
    }

    async render(): Promise<string> {
        this.checkRequirements();
        console.log(' ****>>*>*>>*>*>>*>*>>*>*>>*>*>>*>');
        console.log(` ****>>*> RENDERING MARKDOWN WITH THE [${this.name}] provider`);
        console.log(' ****>>*>*>>*>*>>*>*>>*>*>>*>*>>*>');


        // const example1Md = `https://gitea.com/gitea/helm-chart/raw/branch/main/README.md`

        const markeddowResponse = await fetch(`${this.url}`, {});
        // fetch('https://gitea.com/gitea/helm-chart/raw/branch/main/README.md')
        // const markeddowResponseData = await markeddowResponse.text();
        const markeddowResponseData = markeddowResponse.json();

        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // XXXX -+- XXXXXXXXX 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        // +++ // +++ // +++ // +++ // +++ // +++ // +++ // +++ 
        //
        //  We render the Markdown using he Gitea Renderer throuh the Github API : to improve the rendering and get as close as possible from the original README
        //  That's why the only thing to do is to use the Gitea Renderer,n, if we use gitlab
        //
        // -
        //    pnpm add -D xxxxxxx @types/xxxxxxx @xxxxxxx/yyyy
        // - 
        return markeddowResponseData;
        // return giteaRenderedMd.data;

    } /// END OF RENDER() METHOD
    checkRequirements(): void {
        /**
         * check FORGES_GITHUB_PAT_TOKEN is set.
         */
        let forges_github_pat_token = process.env.FORGES_GITHUB_PAT_TOKEN || '';
        if ( forges_github_pat_token == '' ) {
            throw new Error(` The FORGES_GITHUB_PAT_TOKEN env. var. is not set, but it must be set. Set it to the value of your Github Personal Access Token`)
        }
        /**
         * check FORGES_GITHUB_PAT_TOKEN is set.
         */
            
        let markdownUrl = this.url || '';
        if ( markdownUrl == '' ) {
            throw new Error(` The url of the ${this.name} Renderer is not set, but it must be set`)
        }
    }
}






//////////////// GiteaRenderer
//////////////// GiteaRenderer
//////////////// GiteaRenderer
//////////////// GiteaRenderer
//////////////// GiteaRenderer
//////////////// GiteaRenderer
//////////////// GiteaRenderer
//////////////// GiteaRenderer




/////////////////  UTILS


/**
 * ********************************************************
 * ********************************************************
 * ***********    RENDER THE MARKDOWN TO HTML
 * ********************************************************
 * ********************************************************
 */
interface RenderSelector { renderer: MarkDownRenderer;}


interface ForgesProjetEntry {
    slug: string;
    data: {
        title: string;
        team: string;
        url: string;
        renderer: string;
    }
}

export async function troisForgesRender(entry: ForgesProjetEntry): Promise<string> {

    console.log(` troisForgesRender - JBL DEBUG >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` troisForgesRender - JBL DEBUG [entry]: >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(entry)
    console.log(` JBL DEBUG >>>>>>>>>>>>>>>>>>>>>>`)
    console.log(` JBL DEBUG >>>>>>>>>>>>>>>>>>>>>>`)
    
    
    // const { Content } = await entry.render(); // <Content />
    
    if ( ! ['github', 'gitlab', 'gitea'].includes(entry.data.renderer.toLowerCase()) ) {
        /**
         * 
         **/
        
        throw new Error(` The 'renderer' Field of your [${entry.slug}] Markdown file, has to be either of : gitlab, github, gitea. `)
    }
    
    
    /**
     * ********************************************************
     * ********************************************************
     * ***********    INSTANTIATE THE RENDER SERVICES
     * ********************************************************
     * ********************************************************
     */
    const githubRendererService = new GithubRenderer("The Github Renderer", await entry.data.url)
    const gitlabRendererService = new GitlabRenderer("The Gitlab Renderer", await entry.data.url)
    const giteaRendererService = new GiteaRenderer("The Gitea Renderer", await entry.data.url)

    const selectedRenderer:RenderSelector = { renderer: githubRendererService} // init to Github renderer
    
    /**
     * ********************************************************
     * ********************************************************
     * ***********    SELECT THE RENDERER
     * ********************************************************
     * ********************************************************
     */
    /**
     * By Default, We use the Github renderer
     **/
    selectedRenderer.renderer = githubRendererService

    if ( entry.data.renderer.toLowerCase() == 'github' ) {
        /**
         * We use the Github renderer
         **/
        selectedRenderer.renderer = githubRendererService
        /**
         * 
         */
        
    }
    if ( entry.data.renderer.toLowerCase() == 'gitlab' ) {
        /**
         * We use the Gitlab renderer
         **/
        selectedRenderer.renderer = gitlabRendererService
        
    }
    if ( entry.data.renderer.toLowerCase() == 'gitea' ) {
        /**
         * We use the Gitea renderer
         **/
        throw new Error(`The Gitea Renderer is not fully implemented yet in [./src/pages/projects/index.ts] .`)
        // selectedRender = new GiteaRenderer("The Gitea Renderer", giteaMarkDownURL)
    }

    // RETURN THE Promise of a String
    return selectedRenderer.renderer.render()
}
