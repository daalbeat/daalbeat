const blogPosts = [
  {
    id: 1,
    name: "New Kind of Healthcare Emergency Fund on Blockchain",
    href: "https://mirror.xyz/sicktastic.eth/y7hyLzKMtLx1XrGhzyIhQ8_8d96MEWbZQ0c-Oxb_UD4",
    preview:
      "If you live in the US, you know how complicated and inefficient our healthcare system is. According to research, 66.5 percent...",
    imageUrl:
      "https://images.unsplash.com/photo-1635247187021-ad5ab658bc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2525&q=80",
  },
];
export default function Blog() {
  return (
    <div className="px-4 py-8 rounded-lg bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
      <div>
        <ul role="list" className="space-y-6">
          {blogPosts.map((post) => (
            <li key={post.id} className="flow-root">
              <a
                href={post.href}
                className="flex p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
              >
                <div className="flex-shrink-0 hidden sm:block">
                  <img
                    className="object-cover w-32 h-20 rounded-md"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0 sm:ml-8">
                  <h4 className="text-base font-medium text-gray-900 truncate">
                    {post.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
