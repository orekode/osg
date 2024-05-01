<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="Inspiring Mobile Experiences Beyond The Norm">
        <meta property="og:description" content="Welcome to OS-Ghana, an open-source initiative dedicated to revolutionizing the mobile experience. Our project aims to provide a cutting-edge mobile operating system that empowers users with flexibility, performance, and security.">
        <meta property="og:image" content="https://example.com/your-image.jpg"> <!-- Replace 'https://example.com/your-image.jpg' with the URL of your image -->
        <meta property="og:url" content="https://example.com"> <!-- Replace 'https://example.com' with your website URL -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="OS-Ghana">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Inspiring Mobile Experiences Beyond The Norm">
        <meta name="twitter:description" content="Welcome to OS-Ghana, an open-source initiative dedicated to revolutionizing the mobile experience. Our project aims to provide a cutting-edge mobile operating system that empowers users with flexibility, performance, and security.">
        <meta name="twitter:image" content="https://example.com/your-image.jpg"> <!-- Replace 'https://example.com/your-image.jpg' with the URL of your image -->
        <title inertia>{{ config('app.name', 'Laravel') }} | Inspiring Mobile Experiences Beyond The Norm</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
