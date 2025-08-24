import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./route/router";

const App = () => {
  useEffect(() => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "seampfqnu1"); // ← Replace this
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
