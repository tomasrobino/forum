const categories = [
  {
    "urlName": "mineral-oil",
    "title": "Mineral Oil",
    "desc": "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    "lastPost": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "timestamp": "3/16/2024",
    "user": "tcoultass0",
    "topics": 775,
    "posts": 755,
    "views": 1230
  }, {
    "urlName": "ketorolac-tromethamine",
    "title": "ketorolac tromethamine",
    "desc": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "lastPost": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "timestamp": "7/12/2024",
    "user": "mjerzak1",
    "topics": 281,
    "posts": 687,
    "views": 675
  }, {
    "urlName": "aspirin-and-caffeine",
    "title": "aspirin and caffeine",
    "desc": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    "lastPost": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "timestamp": "1/19/2024",
    "user": "alofty2",
    "topics": 377,
    "posts": 600,
    "views": 87644
  }, {
    "urlName": "midazolam",
    "title": "Midazolam",
    "desc": "Nullam sit amet turpis elementum ligula vehicula consequat.",
    "lastPost": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "timestamp": "11/4/2024",
    "user": "jworden3",
    "topics": 80,
    "posts": 822,
    "views": 342
  }, {
    "urlName": "almacone",
    "title": "Almacone",
    "desc": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "lastPost": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "timestamp": "6/20/2024",
    "user": "eberwick4",
    "topics": 446,
    "posts": 942,
    "views": 1
  }
]

const posts = {
  "mineral-oil": [
    {
      id: "1",
      title: "Mineral Oil Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum pharetra mi, ac porta magna luctus eget. Etiam ac vulputate ante, laoreet pharetra odio. Pellentesque tincidunt diam eu nisi volutpat rutrum. Sed sit amet odio at tortor ultricies malesuada. Praesent mollis, est quis rutrum feugiat, dolor mauris ornare magna, a iaculis orci risus dictum dui. Suspendisse hendrerit nibh elit, sit amet consectetur leo dapibus in. Morbi eu lacinia justo. Cras quis massa turpis. Donec lacinia quam non sem egestas vestibulum. Maecenas quam lacus, commodo non ex id, tempus dapibus orci. Cras at nisl tempus, elementum enim id, bibendum lectus. Praesent tincidunt eu sem ut blandit. Aenean eu aliquam risus.",
      timestamp: "3/16/2024",
      author: {
        posts: 34,
        username: "admin",
        joinDate: "2014-10-17",
        avatar: "",
        profile: "",
        topics: 12
      },
      views: "2454",
      replyAmount: "20",
      replies: [
        {
          id: 1,
          title: "Reply 1",
          text: "In hac habitasse platea dictumst. Sed dapibus ex non mi suscipit facilisis. Proin nec dui nunc. Etiam vitae turpis neque. Donec pretium accumsan metus at suscipit. Aliquam eu diam nibh. Integer efficitur nisi non convallis fringilla. Integer vel tempus tellus, id elementum sem. Mauris non aliquet nibh, id sodales purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquam ante, mattis porttitor ipsum.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        },
        {
          id: 2,
          title: "Reply 2",
          text: "Praesent sagittis, eros at gravida ultrices, nulla mi lacinia est, ac feugiat dui nibh consequat odio. Vestibulum accumsan faucibus lectus eget laoreet. Praesent nec blandit sapien. Cras dignissim blandit massa, id vestibulum erat placerat eget. Quisque tincidunt erat tellus, et viverra neque efficitur in. Vestibulum gravida est ut enim placerat aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam diam lorem, euismod a dolor vel, consequat egestas dolor. Suspendisse scelerisque imperdiet aliquam. Aenean nec condimentum leo. Etiam aliquam ac eros eu suscipit. Etiam at eros nibh. Donec dignissim ac turpis ut sagittis. Integer sit amet venenatis dui. In a magna facilisis, malesuada velit in, elementum leo. Aenean placerat ante nisi, eu interdum nunc pellentesque vitae.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        }
      ]
    },
    {
      id: "2",
      title: "Mineral Oil Post 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, ipsum non vulputate mattis, urna velit lacinia lectus, at ultricies ligula ipsum in ex. Sed et mi id ipsum fringilla malesuada. Integer vel ipsum vel velit hendrerit gravida.",
      timestamp: "3/17/2024",
      author: {
        posts: 34,
        username: "admin",
        joinDate: "2014-10-17",
        avatar: "",
        profile: "",
        topics: 12
      },
      views: "76",
      replyAmount: "10",
      replies: [
        {
          id: 1,
          title: "Reply 1",
          text: "This is a reply to the post.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        },
        {
          id: 2,
          title: "Reply 2",
          text: "This is a reply to the post.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        }
      ]
    }
  ],
  "ketorolac-tromethamine": [
    {
      id: "3",
      title: "ketorolac Tromethamine Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, ipsum non vulputate mattis, urna velit lacinia lectus, at ultricies ligula ipsum in ex. Sed et mi id ipsum fringilla malesuada. Integer vel ipsum vel velit hendrerit gravida.",
      timestamp: "3/16/2024",
      author: {
        posts: 34,
        username: "admin",
        joinDate: "2014-10-17",
        avatar: "",
        profile: "",
        topics: 12
      },
      views: "5",
      replyAmount: "15",
      replies: [
        {
          id: 1,
          title: "Reply 1",
          text: "This is a reply to the post.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        },
        {
          id: 2,
          title: "Reply 2",
          text: "This is a reply to the post.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        }
      ]
    },
    {
      id: "4",
      title: "ketorolac Tromethamine Post 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, ipsum non vulputate mattis, urna velit lacinia lectus, at ultricies ligula ipsum in ex. Sed et mi id ipsum fringilla malesuada. Integer vel ipsum vel velit hendrerit gravida.",
      timestamp: "3/17/2024",
      author: {
        posts: 34,
        username: "admin",
        joinDate: "2014-10-17",
        avatar: "",
        profile: "",
        topics: 12
      },
      views: "6575",
      replyAmount: "5",
      replies: [
        {
          id: 1,
          title: "Reply 1",
          text: "This is a reply to the post.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        },
        {
          id: 2,
          title: "Reply 2",
          text: "This is a reply to the post.",
          timestamp: "3/17/2024",
          author: {
            posts: 34,
            username: "admin",
            joinDate: "2014-10-17",
            avatar: "",
            profile: "",
            topics: 12
          }
        }
      ]
    }
  ]
}

module.exports = {
  categories: categories,
  posts: posts
}