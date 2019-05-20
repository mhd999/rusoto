(function() {var implementors = {};
implementors["rusoto_core"] = [{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.39/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"rusoto_core/enum.RusotoError.html\" title=\"enum rusoto_core::RusotoError\">RusotoError</a>&lt;E&gt;",synthetic:false,types:["rusoto_core::error::RusotoError"]},{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rusoto_core/struct.CredentialsError.html\" title=\"struct rusoto_core::CredentialsError\">CredentialsError</a>&gt; for <a class=\"enum\" href=\"rusoto_core/enum.RusotoError.html\" title=\"enum rusoto_core::RusotoError\">RusotoError</a>&lt;E&gt;",synthetic:false,types:["rusoto_core::error::RusotoError"]},{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"rusoto_core/request/struct.HttpDispatchError.html\" title=\"struct rusoto_core::request::HttpDispatchError\">HttpDispatchError</a>&gt; for <a class=\"enum\" href=\"rusoto_core/enum.RusotoError.html\" title=\"enum rusoto_core::RusotoError\">RusotoError</a>&lt;E&gt;",synthetic:false,types:["rusoto_core::error::RusotoError"]},{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"rusoto_core/enum.RusotoError.html\" title=\"enum rusoto_core::RusotoError\">RusotoError</a>&lt;E&gt;",synthetic:false,types:["rusoto_core::error::RusotoError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static, E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"rusoto_core/enum.RusotoError.html\" title=\"enum rusoto_core::RusotoError\">RusotoError</a>&lt;E&gt;&gt;&gt; for <a class=\"struct\" href=\"rusoto_core/struct.RusotoFuture.html\" title=\"struct rusoto_core::RusotoFuture\">RusotoFuture</a>&lt;T, E&gt;",synthetic:false,types:["rusoto_core::future::RusotoFuture"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"rusoto_core/struct.ByteStream.html\" title=\"struct rusoto_core::ByteStream\">ByteStream</a>",synthetic:false,types:["rusoto_core::stream::ByteStream"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/hyper/0.12.29/hyper/error/struct.Error.html\" title=\"struct hyper::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"rusoto_core/request/struct.HttpDispatchError.html\" title=\"struct rusoto_core::request::HttpDispatchError\">HttpDispatchError</a>",synthetic:false,types:["rusoto_core::request::HttpDispatchError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"rusoto_core/request/struct.HttpDispatchError.html\" title=\"struct rusoto_core::request::HttpDispatchError\">HttpDispatchError</a>",synthetic:false,types:["rusoto_core::request::HttpDispatchError"]},];
implementors["rusoto_credential"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/format/struct.ParseError.html\" title=\"struct chrono::format::ParseError\">ParseError</a>&gt; for <a class=\"struct\" href=\"rusoto_credential/struct.CredentialsError.html\" title=\"struct rusoto_credential::CredentialsError\">CredentialsError</a>",synthetic:false,types:["rusoto_credential::CredentialsError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"rusoto_credential/struct.CredentialsError.html\" title=\"struct rusoto_credential::CredentialsError\">CredentialsError</a>",synthetic:false,types:["rusoto_credential::CredentialsError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/hyper/0.12.29/hyper/error/struct.Error.html\" title=\"struct hyper::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"rusoto_credential/struct.CredentialsError.html\" title=\"struct rusoto_credential::CredentialsError\">CredentialsError</a>",synthetic:false,types:["rusoto_credential::CredentialsError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.39/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"rusoto_credential/struct.CredentialsError.html\" title=\"struct rusoto_credential::CredentialsError\">CredentialsError</a>",synthetic:false,types:["rusoto_credential::CredentialsError"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()