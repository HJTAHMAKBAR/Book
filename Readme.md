# 使用说明

- 安装虚拟环境

  ```shell
  pip install virtualenv
  ```

- 在根目录Book下创建虚拟环境

  ```shell
  python -m venv venv
  ```

- 进入venv文件夹中的Scripts文件夹下

  ```shell
  cd venv
  cd Scripts
  ```

- 激活虚拟环境

  ```shell
  activate
  ```

- 使用pip安装第三方依赖或者根据Pycharm提示自动安装依赖包

  ```shell
  pip install -r requirements.txt
  ```

- 运行migrate命令，创建数据库和数据表

  ```shell
  python manage.py migrate
  ```
  
- 启动服务器

  ```
  python manage.py runserver
  ```

# 布课网开发文档

### 网页设计策划书

**一、** **策划背景分析**

**1.**   **市场分析：**

​    新冠疫情爆发后，为阻断疫情向校园蔓延，教育部号召“停课不停学”，各高校纷纷开始网上教学的新尝试。随着互联网技术的发展和广泛应用以及网络宽带的提升，在线学习教育呈现快速发展之势，目前越来越多的学校和教师在尝试运用“互联网+”教学，基于互联网的在线教学成为学校教学信息化研究与实践的新热点。尤其近几年随着大数据、物联网、移动互联网等新一代信息技术的应用及其与课堂教学深度融合，在线教育和网络学习形成了一种新的风向，得以迅速的发展。

​    经过这半年的网上学习体验之后，不少教师以及同学对于利用互联网学习有了更深的了解，也更加的看好。尤其是类似于计算机学科专业的同学，在网络上寻求学习资源然后自学是一项必不可少的技能。相比于传统的学习方式，在线学习有着诸多独特的优势。

**2.**   **优势分析：**

​    互联网学习有着诸多显著优势：

1. 知识的分享造就教育的全球化和普遍化

2. 打破时间、空间限制，更加灵活自由

3. 资源利用最大化

4. 内容更加丰富、生动，可视化

5. 培养自学能力和资源整合能力

6. 覆盖面广、参与人数多、共享度高、灵活便捷以及成本低廉

**3.**   **网站目的：**

​    建立一个在线的学习资源整合平台，将具体某一方面的学科教材上的内容结合它们的一些扩展知识，以一种更加生动，丰富，易于理解的形式展现在网页上。不同于纸质化教材或单纯的电子书，在此平台上，用户可以有着更丰富的操作，和网页上的知识交互，以一种近似游戏化的体验去更好的理解具体的内容。同时，网站提供用户之间的联系，可以发布自己的问题设置悬赏，也可以回答他人的问题，互相学习。

**4.**   **用户分析**

​    对于当人们想要探索未知，获取解答的时候，在网络寻找答案是这个时代里大多数人的选择。不同于传统的纸质书籍，或者寻找他人解惑，互联网总是能在第一时间，极大可能地给你最相关的答案。

​    对于中学或者大学的学生而言，课堂使用的教材虽然涵盖了教学要求的内容，但是要想获取扩展知识或者是更深一步的掌握其中的内容，不少老师和同学们选择在互联网上寻求帮助。而目前互联网上关于学科知识的网站鱼龙混杂，不少都是付费或者随意复制粘贴，答非所问，误人子弟的内容。

​    对于教育资源匮乏的偏远或者贫困地区的学生而言，他们往往由于教学条件的落后，不能很好的理解一些学科知识或是与生活所遥远的内容。而此时，一个能将教材上的知识内容可视化、丰富化的网站，成为了一个解决这个问题的有效方法，近些年来，我国大力推进4G网络的覆盖和5G的发展，那些地区的孩子可以通过互联网作为得力助手帮助他们更好的得到教育，在浏览和点击交互的过程中，看到更加不一样的知识世界。

**二、** **网站建设方案**

**1网站名称：布课网**

**2网站功能：**

1. 登录注册，创建自己的账号

2. 在书库里选择自己需要的教材添加到自己的书单

3. 浏览内容，与知识内容交互

4. 发布关于书的暂时不能理解的内容，设置悬赏

5. 解答别人的问题，取得悬赏

6. 创建自己的学习的笔记，心得

**5.**   **网站风格：**干净简洁，富有知识的专业性却又不失生动活泼 

**6.**   **网站结构及内容：**

1. 首页：学科和书籍的选择

2. 书籍文章页：具体的知识内容

3. 个人主页：学习市场，个人笔记，问题的解答

4. 导航栏：面包屑，实现各页面的跳转

**三、** **步骤实现**

1. 各页面的网页前端框架初步建立

2. 选择一门或几门学科，收集相关资料，做出内容

3. 后端功能的实现