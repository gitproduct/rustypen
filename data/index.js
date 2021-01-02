import path from 'path';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import remark from 'remark';
import html from 'remark-html';


const adapter = new FileSync(path.resolve(process.cwd(),'data/data.json'));
const db = low(adapter);

db.defaults({ posts: [], count: 0 }).write();


class index{
  slugs(){
    // const data = db.get('posts').value();
    // const slugs = data.map((post)=>post.slug);
    const slugs = db.get('posts').map('slug').value();
    return slugs;
  }

  async getPostContent(slug){
    const post = db.get('posts').find({slug:slug}).value();
    const content = await remark().use(html).process(post.content);
    return content.toString();
  }

  getPostHeader(slug){
    const post = db.get('posts').find({slug:slug}).value();
    const header = {
      "title": post.title,
      "feature_image": post.feature_image,
      "published_date": post.published_date
    }
    return header;
  }

  getAllPostHeader(){
    const posts = db.get('posts').value();
    const headers = posts.map((post)=>{
      return ({
        slug: post.slug,
        feature_image: post.feature_image,
        published_date: post.published_date,
        title: post.title,
        excerpt: post.excerpt
      })
    });
    return headers;
  }

}


export default new index();