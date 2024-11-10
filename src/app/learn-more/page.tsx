import Image from "next/image";
import img from "../public/nextjs.jpg";

export default function LearnMore() {
    return (
        <section className=" bg-black text-white body-font">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 md:py-20">
                <div className="relative mb-10 w-full max-w-3xl"> {/* Set a max width for the image */}
                    <Image
                        className="rounded-[50px] border-4 border-white object-cover object-center"
                        alt="hero"
                        src={img}
                        layout="responsive"
                        width={700} // Adjust width as necessary
                        height={400} // Adjust height as necessary
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Exploring Next.js 15 RC</h1>
                    </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">What is Next.js?</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            Next.js is a versatile, open-source React framework developed by Vercel. It is designed to easily build fast, SEO-friendly, and user-friendly web apps. It elegantly combines server-side rendering, static site generation, and client-side rendering capabilities, making it an outstanding choice for modern web development.
                        </p>
                        <p className="text-lg md:text-2xl mb-6">
                            Its features include automatic code splitting, efficient routing, API routes, and an optimized production build, contributing to its performance and scalability. Moreover, Next.js prioritizes developer experience, offering fast refresh for a more seamless coding process. This ensures that it caters to the end user needs and those creating the apps.
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">How do I upgrade to the latest Next.js version?</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            To upgrade to the latest version of Next.js (version 15 RC), use the following command with your preferred package manager:
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">NPM</h2>
                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">npm i next@rc react@rc react-dom@rc eslint-config-next@rc</code>

                        <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">Yarn</h2>
                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">yarn add next@rc react@rc react-dom@rc eslint-config-next@rc</code>

                        <p className="text-lg md:text-2xl mt-6">
                            Please note that the minimum required versions for react and react-dom are 19. For more information on version upgrading, refer to the official documentation.
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">React 19 RC</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            Before upgrading to React 19 RC, please check the new features and updates by visiting our blog.
                        </p>
                        <p className="text-lg md:text-2xl mb-6">
                            With the unveiling of React 19 RC, the Next.js App Router is being developed on the React canary channel specifically for frameworks. This allows developers to utilize and provide input on the latest React APIs ahead of the official v19 launch. Next.js 15 RC will be compatible with React 19 RC, bringing forth novel features for both client-side and server-side environments, including Actions.
                        </p>
                        <p className="text-lg md:text-2xl">
                            For more information, please refer to the React 19 upgrade guide.
                        </p>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">React Compiler</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            The React Compiler is a new experimental compiler developed by the React team at Meta. It leverages its understanding of plain JavaScript semantics and the Rules of React to analyze and optimize your code. This deep understanding enables the compiler to automatically apply optimizations, reducing the need for manual memoization techniques like <code>useMemo</code> and <code>useCallback</code>. As a result, your code becomes more concise, easier to maintain, and less prone to errors.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            With Next.js 15, React Compiler support has been added. However, the React Compiler can currently only be used in Next.js through a Babel plugin.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Installation</h2>
                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">npm install babel-plugin-react-compiler</code>

                        <p className="text-lg md:text-2xl mb-6">
;                            Add the <code>experimental.reactCompiler</code> option in the <code>next.config.js</code> file.
                        </p>

                        <pre className="block text-lg md:text-2xl bg-gray-800 p-2 rounded overflow-x-auto">
                            <code className="text-lg md:text-sm">
{`const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};
module.exports = nextConfig;`}
                            </code>
                        </pre>

                        <p className="text-lg md:text-2xl mb-6">
                            Using the experimental option ensures support for the React Compiler in the following areas: App Router, Pages Router, Webpack, and Turbopack.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Key benefits of the React Compiler</h2>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li>Automatic optimization: The compiler identifies opportunities to optimize your code, improving performance without manual effort.</li>
                            <li>Reduced boilerplate: Lessens the need for manual memoization, leading to cleaner and more concise code.</li>
                            <li>Improved maintainability: Simplifies code, making it easier to understand and modify.</li>
                            <li>Error prevention: Helps avoid common performance pitfalls related to unnecessary re-renders.</li>
                        </ul>

                        <p className="text-lg md:text-2xl">
                            <strong>Note:</strong> The React Compiler is currently in an experimental phase, and its features and capabilities may evolve. It recommended that you stay updated with the latest developments and consider using it cautiously in your projects.
                        </p>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Hydration error enhancements</h1>
                        <p className="text-lg md:text-2xl mb-6 ">
                            Next.js 15 has improved the way hydration errors are displayed. Hydration errors happen in Next .js when there is a mismatch between the HTML rendered on the server and the HTML rendered in the client during the initial load. This mismatch can be caused by text, incorrect HTML nesting, and browser-specific code. With the new improvements, when a hydration error occurs, the source code of the error is displayed, along with suggestions on how to fix the issue.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            For more details, refer to the official Next.js documentation on Hydration error improvements.
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Caching updates</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            Caching in Next.js is essential for improving performance and reducing server load. The Next.js App Router was introduced with opinionated caching defaults, designed to provide optimal performance by default with the ability to opt out when necessary.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            In Next.js 15, the default behavior for caching fetch requests, GET Route Handlers, and the Client Router Cache has been updated. Previously, these were cached by default, but now they are uncached by default. If you prefer the old behavior, you can still opt into caching. Note that layouts and loading states will continue to be cached and reused during navigation.
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Client router cache behavior in Next.js 15</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            An experimental <code>staleTimes</code> flag was introduced to allow custom configuration of the Router Cache in Next.js 14.2.0. This flag still remains accessible in Next.js 15. However, we are changing the default behavior to a <code>staleTime</code> of 0 for Page segments. This means that as you navigate your app, the client will always reflect the latest data from the Page component(s) that become active as part of the navigation. However, there are still important behaviors that remain unchanged:
                        </p>

                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li>Shared layout data avoids server re-fetching, supporting partial rendering.</li>
                            <li>Browser back/forward navigation restores cache, including scroll position.</li>
                            <li><code>Loading.js</code> is cached for 5 minutes or per <code>staleTimes.static</code> config.</li>
                        </ul>

                        <p className="text-lg md:text-2xl mb-6">
                            You can opt into the previous client router cache behavior by setting the following configuration:
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded">
                            const nextConfig = &#123;<br />
                            &nbsp;&nbsp;experimental: &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;staleTimes: &#123; dynamic: 30 &#125;,<br />
                            &nbsp;&nbsp;&#125;,<br />
                            &#125;;<br />
                            module.exports = nextConfig;
                        </code>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Create-next-app enhancements</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            Let discuss the improvements in <code>create-next-app</code>. When you launch the app, it now has a new landing page and provides a prompt for choosing Turbopack when creating the Next app.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            The Next.js 14 release introduced an incremental bundler called Turbopack, which is written in Rust and designed to optimize JavaScript and TypeScript. It has been integrated into Next.js to improve development performance.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            In the Next.js 15 RC, when running the <code>create-next-app</code> command, a new prompt asks whether you would like to enable Turbopack for local development. The default setting is No.
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">
                            ✔ Would you like to use Turbopack for next dev? … No / Yes
                        </code>

                        <p className="text-lg md:text-2xl mb-6">
 The <code>–turbo</code> flag can be used to activate Turbopack.
 </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">
                            npx create-next-app@rc - turbo
                        </code>

                        <p className="text-lg md:text-2xl mb-6">
                            To simplify the process of getting started on a new project, a new <code>- empty</code> flag has been included in the CLI. This flag removes unnecessary files and styles, resulting in a minimal Hello world page.
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded">
                            npx create-next-app@rc - empty
                        </code>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Improving the bundling of external libraries (stable)</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            Integrating external libraries can enhance an app initial load performance. By default, the App Router bundles external libraries, but you can exclude particular libraries using the <code>serverExternalPackages</code> configuration option.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            In the Pages Router, external libraries are not bundled by default. However, you can specify a list of libraries you wish to bundle through the <code>transpilePackages</code> option, which requires individual package specifications.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            To streamline configurations across both the App and Pages routers, a new option named <code>bundlePagesRouterDependencies</code> was introduced. This setting will align with the App Router default behavior of automatically bundling external libraries. The <code>serverExternalPackages</code> option remains available to exclude specific libraries as needed.
                        </p>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Response execution with next/after (experimental)</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            When handling a user request, the server usually focuses on tasks directly related to generating the response. However, additional tasks like logging, analytics, or synchronizing with external systems often need to be performed.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            These secondary tasks should ensure the user response is timely. Deferring such tasks can be challenging because serverless functions typically stop execution as soon as the response is sent.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            The <code>after()</code> API, currently experimental, addresses this issue by allowing you to schedule tasks to run after the response has been streamed. This enables secondary tasks to execute without blocking the primary response.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            To enable this feature, add <code>experimental.after</code> to your <code>next.config.js</code>.
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">
                            const nextConfig = &#123;<br />
                            &nbsp;&nbsp;experimental: &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;after: true,<br />
                            &nbsp;&nbsp;&#125;,<br />
                            &#125;;<br />
                            module.exports = nextConfig;
                        </code>

                        <p className="text-lg md:text-2xl mb-6">
                            Then, import the function in Server Components, Server Actions, Route Handlers, or Middleware.
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">
                            import &#123; unstable_after as after &#125; from &apos;next/server&apos;;
                        </code>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded">
                            export default function Layout(&#123; children &#125;) &#123;<br />
                            &nbsp;&nbsp;// Secondary task.<br />
                            &nbsp;&nbsp;after(() =&gt; &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;....<br />
                            &nbsp;&nbsp;&#125;);<br /><br />
                            &nbsp;&nbsp;// Primary task.<br />
                            &nbsp;&nbsp;return &lt;&gt;&#123;children&#125;&lt;/&gt;;<br />
                            &#125 ;
                        </code>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Partial Prerendering</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            Partial Prerendering, or PPR, was rolled out in Next.js 14. It is an optimization that blends static and dynamic rendering on the same page.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            By default, Next.js uses static rendering unless dynamic functions like <code>cookies()</code>, <code>headers()</code>, or uncached data requests are used, which switch the entire route to dynamic rendering. With PPR, you can wrap dynamic UI components in a <code>Suspense</code> boundary. When a new request is made, Next.js immediately serves a static HTML shell and then renders and streams the dynamic parts within the same HTTP request.
                        </p>

                        <p className="text-lg md:text-2xl mb-6">
                            To facilitate incremental adoption, we added an <code>experimental_ppr</code> route config option to enable PPR for specific Layouts and Pages. Refer to the following code example.
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">
                            import &#123; Suspense &#125; from &apos;react&apos;<br />
                            import &#123; StaticComponent, DynamicComponent &#125; from &apos;@/app/ui&apos;<br /><br />
                            export const experimental_ppr = true<br /><br />
                            export default function Page() &#123;<br />
                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;StaticComponent /&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense fallback=&#123;...&#125;&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DynamicComponent /&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;<br />
                            &nbsp;&nbsp;);<br />
                            &#125;
                        </code>

                        <p className="text-lg md:text-2xl mb-6">
                            To use this new option, set the <code>experimental.ppr</code> config to <code>incremental</code> in your <code>next.config.js</code> file.
                        </p>

                        <code className="block text-lg md:text-2xl bg-gray-800 p-2 rounded mb-6">
                            const nextConfig = &#123;<br />
                            &nbsp;&nbsp;experimental: &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ppr: &apos;incremental&apos;,<br />
                            &nbsp;&nbsp;&#125;,<br />
                            &#125;;<br />
                            module.exports = nextConfig;
                        </code>

                        <p className="text-lg md:text-2xl">
                            Once all segments have PPR enabled, setting the <code>ppr</code> value to <code>true</code> will be safe, enabling it for the entire app and all future routes.
                        </p>
                    </div>
                </div>
        </section>
    );
}