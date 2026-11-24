import React, { useState } from "react";
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Eye,
  Sun,
  Moon,
  Brain,
  Layers,
  Award,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Clock,
  Star,
  FileText,
  GraduationCap,
  Check,
  Flame,
  Smartphone,
  Download,
  BookMarked,
  Lightbulb,
  Copy,
  MessageCircle,
  PlayCircle,
  Send,
} from "lucide-react";

const MEDIA = {
  logo: "./media/vocab_hero_logo.jpg",
  hero: "./media/vocab_hero_full.jpg",
  preview: "./media/vocab_story_preview.jpg",
  promoVideo: "./media/promo_video_web.mp4",
  videoPoster: "./media/promo_poster.jpg",
};

const CONTACT = {
  bkashNumber: "01511808472",
  whatsappNumber: "01737808472",
  whatsappLink:
    "https://wa.me/8801737808472?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%2C%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E2%80%9C%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87%20%E0%A6%B6%E0%A6%BF%E0%A6%96%E0%A6%BF%20Vocabulary!%E2%80%9D%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%20%E0%A6%87%E0%A6%AC%E0%A7%81%E0%A6%95%E0%A7%87%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%20%E0%A7%A7%E0%A7%A6%E0%A7%A6%E0%A7%B3%20%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B6%E0%A7%87%20%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%9B%E0%A6%BF%E0%A5%A4%20%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%20TrxID%20/%20%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A6%B6%E0%A6%9F%20%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A6%BF%E0%A5%A4",
  whatsappBundleLink:
    "https://wa.me/8801737808472?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%2C%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E2%80%9C%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87%20%E0%A6%B6%E0%A6%BF%E0%A6%96%E0%A6%BF%20Vocabulary!%E2%80%9D%20%E0%A6%AE%E0%A7%87%E0%A6%97%E0%A6%BE%20%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B2%20%E0%A6%85%E0%A6%AB%E0%A6%BE%E0%A6%B0%20(%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%20%E0%A6%87%E0%A6%AC%E0%A7%81%E0%A6%95%20%2B%20%E0%A7%A9%E0%A6%A1%E0%A6%BF%20%E0%A6%AB%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B6%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1)%20%E0%A6%8F%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%20%E0%A7%A7%E0%A7%AB%E0%A7%A6%E0%A7%B3%20%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B6%E0%A7%87%20%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%9B%E0%A6%BF%E0%A5%A4%20%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%20TrxID%20/%20%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A6%B6%E0%A6%9F%20%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A6%BF%E0%A5%A4",
};

const STORIES = [
  {
    id: "story-1",
    number: "গল্প ১",
    badge: "ক্লাসিক সংস্করণ • পরিমার্জিত",
    title: "নতুন শহরের প্রথম ধাক্কা",
    segments: [
      { text: "ঢাকায় আসার প্রথম দিনেই রাফি বুঝতে পারল শহরের চাপটা বেশ " },
      { word: "INTENSE" },
      { text: "। নতুন মেসে উঠে সে শুরুতে বেশ " },
      { word: "RETICENT" },
      {
        text: " হয়ে থাকত—কারও সাথে আগ বাড়িয়ে কথা বলত না। চারপাশের মানুষের ব্যস্ততা আর ",
      },
      { word: "APATHY" },
      {
        text: " দেখে প্রথম দিকে তার মন কিছুটা দমে গিয়েছিল। কিন্তু রাফি জানত, শুধু বসে থাকলে পরিস্থিতি বদলাবে না; নিজের চেষ্টাতেই অবস্থা ",
      },
      { word: "AMELIORATE" },
      {
        text: " করতে হবে। একবার টিউশনির কাজে দেরি হওয়ায় অভিভাবকের কাছ থেকে মৃদু ",
      },
      { word: "CENSURE" },
      { text: " শুনতে হয়েছিল, আর সেই অভিজ্ঞতা তার জন্য বেশ " },
      { word: "DIDACTIC" },
      { text: " হয়ে দাঁড়াল। সে বুঝে গেল, সাময়িক কষ্টগুলো " },
      { word: "EPHEMERAL" },
      { text: "—তাই " },
      { word: "PRUDENT" },
      { text: " সিদ্ধান্ত নিয়ে খরচ কমাতে সে আরও " },
      { word: "FRUGAL" },
      { text: " হলো এবং পড়াশোনায় নিজের " },
      { word: "ACUMEN" },
      { text: " কাজে লাগাতে শুরু করল।" },
    ],
    words: {
      INTENSE: {
        word: "INTENSE",
        pos: "Adjective",
        bn: "তীব্র, প্রচণ্ড, গভীর",
        example:
          "He felt an intense pressure to perform well on his first day.",
        mnemonic: "In + Tense — ভেতরে ভেতরে চরম টেনশন বা তীব্র অনুভূতি।",
        synonyms: ["Fierce", "Acute", "Profound"],
        antonyms: ["Mild", "Weak"],
        context: "শহরের প্রথম দিনের প্রবল চাপ বোঝাতে ব্যবহৃত হয়েছে।",
      },
      RETICENT: {
        word: "RETICENT",
        pos: "Adjective",
        bn: "স্বল্পভাষী, সংযত, চুপচাপ",
        example:
          "She was reticent about her personal plans during the meeting.",
        mnemonic:
          "Roti + Cent — 'রুটি' বা 'কথা' বলার জন্য এক পয়সাও খরচ করতে নারাজ!",
        synonyms: ["Reserved", "Taciturn", "Quiet"],
        antonyms: ["Talkative", "Garrulous"],
        context: "নতুন পরিবেশে কম কথা বলার স্বভাব বোঝাতে বসেছে।",
      },
      APATHY: {
        word: "APATHY",
        pos: "Noun",
        bn: "উদাসীনতা, অনাগ্রহ",
        example:
          "Voter apathy led to a very low turnout in the local election.",
        mnemonic: "A (না) + Pathy (অনুভূতি) — কোনো অনুভূতি বা আগ্রহ না থাকা।",
        synonyms: ["Indifference", "Lethargy", "Detachment"],
        antonyms: ["Enthusiasm", "Passion"],
        context: "ব্যস্ত শহরের মানুষের অনাগ্রহ ও উদাসীনতা বোঝাচ্ছে।",
      },
      AMELIORATE: {
        word: "AMELIORATE",
        pos: "Verb",
        bn: "উন্নতি করা, অবস্থার লাঘব করা",
        example:
          "New policies were introduced to ameliorate working conditions.",
        mnemonic:
          "Ameli + Orate — 'আমেলি' নামের মেয়েটি দারুণ বক্তৃতা দিয়ে পরিস্থিতির উন্নতি করে।",
        synonyms: ["Improve", "Mitigate", "Alleviate"],
        antonyms: ["Worsen", "Aggravate"],
        context: "খারাপ পরিস্থিতি থেকে ভালো অবস্থায় নেওয়ার অর্থে ব্যবহৃত।",
      },
      CENSURE: {
        word: "CENSURE",
        pos: "Noun / Verb",
        bn: "তিরস্কার, কঠোর নিন্দা করা",
        example:
          "The committee issued a formal censure against the careless official.",
        mnemonic:
          "Sen + Sure — সেন্সর বোর্ড কোনো খারাপ দৃশ্য দেখলেই নিশ্চিত তিরস্কার করে।",
        synonyms: ["Reprimand", "Condemn", "Rebuke"],
        antonyms: ["Praise", "Commend"],
        context: "দেরি করার কারণে অভিভাবকের ভর্ৎসনা বোঝাতে বসেছে।",
      },
      DIDACTIC: {
        word: "DIDACTIC",
        pos: "Adjective",
        bn: "শিক্ষামূলক, উপদেশমূলক",
        example: "The fable had a clear didactic purpose for young readers.",
        mnemonic:
          "Did + Act + Teach — যে কাজ বা অভিজ্ঞতা থেকে সরাসরি শিক্ষা পাওয়া যায়।",
        synonyms: ["Instructive", "Educational", "Moralizing"],
        antonyms: ["Uninformative", "Purely entertaining"],
        context: "ভুল থেকে পাওয়া বাস্তব শিক্ষাকে নির্দেশ করছে।",
      },
      EPHEMERAL: {
        word: "EPHEMERAL",
        pos: "Adjective",
        bn: "ক্ষণস্থায়ী, স্বল্পকালের",
        example:
          "Social media trends are often ephemeral and fade within days.",
        mnemonic: "E + Funeral — আজ আছে তো কাল নেই, একেবারেই ক্ষণস্থায়ী।",
        synonyms: ["Transient", "Fleeting", "Short-lived"],
        antonyms: ["Permanent", "Enduring"],
        context: "শুরুর কষ্ট যে চিরস্থায়ী নয়, তা বোঝাতে ব্যবহৃত।",
      },
      PRUDENT: {
        word: "PRUDENT",
        pos: "Adjective",
        bn: "বিচক্ষণ, দূরদর্শী, সতর্ক",
        example:
          "It is prudent to save a portion of your income for emergencies.",
        mnemonic:
          "Pro + Student — একজন চৌকস ছাত্র সবসময় বিচক্ষণ সিদ্ধান্ত নেয়।",
        synonyms: ["Wise", "Judicious", "Sensible"],
        antonyms: ["Reckless", "Imprudent"],
        context: "ভবিষ্যৎ ভেবে বুদ্ধিমানের মতো পদক্ষেপ নেওয়া বোঝাচ্ছে।",
      },
      FRUGAL: {
        word: "FRUGAL",
        pos: "Adjective",
        bn: "মিতব্যয়ী, হিসাবি",
        example:
          "Living a frugal lifestyle helped her pay off her student loans early.",
        mnemonic: "Free + Gal — অযথা খরচ না করে হিসাব করে চলা।",
        synonyms: ["Thrifty", "Economical", "Sparing"],
        antonyms: ["Extravagant", "Prodigal"],
        context: "অপ্রয়োজনীয় খরচ কমিয়ে চলার অভ্যাস বোঝাতে বসেছে।",
      },
      ACUMEN: {
        word: "ACUMEN",
        pos: "Noun",
        bn: "তীক্ষ্ণ বুদ্ধি, বিচক্ষণতা",
        example:
          "Her business acumen turned the struggling startup into a leader.",
        mnemonic:
          "Acute (তীক্ষ্ণ) + Men — তীক্ষ্ণ বুদ্ধি ও দ্রুত সিদ্ধান্ত নেওয়ার ক্ষমতা।",
        synonyms: ["Astuteness", "Shrewdness", "Insight"],
        antonyms: ["Naivety", "Obtuseness"],
        context: "পড়াশোনায় ও সিদ্ধান্তে তীক্ষ্ণ বুদ্ধির প্রয়োগ বোঝাচ্ছে।",
      },
    },
  },
  {
    id: "story-2",
    number: "গল্প ২",
    badge: "ক্লাসিক সংস্করণ • পরিমার্জিত",
    title: "পুরোনো লাইব্রেরির রহস্য",
    segments: [
      {
        text: "বিশ্ববিদ্যালয়ের পুরোনো আর্কাইভে ঢুকে তানিয়া দেখল, তাকগুলো বেশ ",
      },
      { word: "ANTIQUATED" },
      { text: " এবং সেখানে এমন কিছু " },
      { word: "ESOTERIC" },
      {
        text: " বই রাখা আছে যা কেবল হাতেগোনা কয়েকজন গবেষকই বোঝেন। সে প্রতিটি পাতা গভীরভাবে ",
      },
      { word: "SCRUTINIZE" },
      { text: " করতে লাগল। এক জায়গায় সে পড়ল এক " },
      { word: "PRODIGAL" },
      {
        text: " জমিদারের কথা, যার বেহিসাবি খরচের বিরুদ্ধে এলাকার মানুষ তীব্র ভাষায় ",
      },
      { word: "INVEIGH" },
      { text: " করত।" },
    ],
    words: {
      ANTIQUATED: {
        word: "ANTIQUATED",
        pos: "Adjective",
        bn: "সেকেলে, অপ্রচলিত, প্রাচীন",
        example:
          "The company finally replaced its antiquated accounting software.",
        mnemonic:
          "Antique (পুরাকীর্তি) — যে জিনিস এখন আর আধুনিক নয়, একেবারে সেকেলে।",
        synonyms: ["Outdated", "Obsolete", "Archaic"],
        antonyms: ["Modern", "Contemporary"],
        context: "পুরোনো আমলের তাক ও ব্যবস্থা বোঝাতে বসেছে।",
      },
      ESOTERIC: {
        word: "ESOTERIC",
        pos: "Adjective",
        bn: "গূঢ়, কেবল বিশেষজ্ঞদের বোধগম্য",
        example: "The lecture was full of esoteric physics terminology.",
        mnemonic:
          "Eso + Terrific — সাধারণের নাগালের বাইরে, কেবল গুটিকয়েক মানুষ বোঝে।",
        synonyms: ["Arcane", "Obscure", "Cryptic"],
        antonyms: ["Commonplace", "Accessible"],
        context: "দুর্লভ ও গূঢ় গবেষণামূলক বইয়ের ধরন বোঝাচ্ছে।",
      },
      SCRUTINIZE: {
        word: "SCRUTINIZE",
        pos: "Verb",
        bn: "খুঁটিয়ে পরীক্ষা করা, সূক্ষ্মভাবে যাচাই করা",
        example:
          "Auditors will scrutinize every receipt before approving the budget.",
        mnemonic:
          "Screw + Eyes — চোখ স্ক্রুর মতো আটকে রেখে প্রতিটি খুঁটিনাটি দেখা।",
        synonyms: ["Examine", "Inspect", "Analyze"],
        antonyms: ["Glance", "Overlook"],
        context: "পাণ্ডুলিপির পাতাগুলো মন দিয়ে যাচাই করা বোঝাতে ব্যবহৃত।",
      },
      PRODIGAL: {
        word: "PRODIGAL",
        pos: "Adjective",
        bn: "অপব্যয়ী, বেহিসাবি খরচকারী",
        example:
          "His prodigal spending habits quickly drained the family fortune.",
        mnemonic: "Pro + Dig + All — সব টাকা-পয়সা অকাতরে উড়িয়ে দেওয়া।",
        synonyms: ["Wasteful", "Extravagant", "Spendthrift"],
        antonyms: ["Frugal", "Thrifty"],
        context: "জমিদারের বেহিসাবি খরচের স্বভাব তুলে ধরছে।",
      },
      INVEIGH: {
        word: "INVEIGH",
        pos: "Verb",
        bn: "তীব্র ভাষায় প্রতিবাদ বা সমালোচনা করা",
        example:
          "Citizens began to inveigh against the sudden rise in utility bills.",
        mnemonic: "In + Weigh — ভারী ও কড়া কথায় কারও বিরুদ্ধে প্রতিবাদ করা।",
        synonyms: ["Rail", "Denounce", "Protest"],
        antonyms: ["Endorse", "Praise"],
        context: "জমিদারের অপচয়ের বিরুদ্ধে মানুষের তীব্র ক্ষোভ প্রকাশ করছে।",
      },
    },
  },
  {
    id: "story-51",
    number: "গল্প ৫১",
    badge: "নতুন ৫০ গল্পের সংযোজন • জিরো ওভারল্যাপ",
    title: "আদালতের প্রথম দিন",
    segments: [
      {
        text: "আদালতের বারান্দায় পা রাখতেই এক সাংবাদিক এসে তরুণ আইনজীবী নাফিসকে ",
      },
      { word: "ACCOST" },
      { text: " করল। তার মক্কেলকে নির্দোষ প্রমাণ করে " },
      { word: "ACQUIT" },
      {
        text: " করানোই ছিল আজকের বড় চ্যালেঞ্জ। বিচারকের সামনে নাফিস একের পর এক শক্তিশালী প্রমাণ ",
      },
      { word: "ADDUCE" },
      { text: " করল। বিপক্ষের আইনজীবী শুরুতে বেশ " },
      { word: "BELLIGERENT" },
      { text: " আচরণ করলেও এবং নানা আইনি " },
      { word: "CHICANERY" },
      {
        text: " করার চেষ্টা করলেও, শেষ পর্যন্ত সিসিটিভি ফুটেজ নাফিসের প্রতিটি যুক্তিকে ",
      },
      { word: "CORROBORATE" },
      { text: " করে দিল।" },
    ],
    words: {
      ACCOST: {
        word: "ACCOST",
        pos: "Verb",
        bn: "হঠাৎ পথ আগলে কথা বলা",
        example:
          "Reporters accosted the celebrity outside the airport terminal.",
        mnemonic:
          "At + Cost — যেকোনো মূল্যে সামনে এসে কথা বলার জন্য পথ আগলানো।",
        synonyms: ["Confront", "Approach", "Waylay"],
        antonyms: ["Avoid", "Ignore"],
        context: "সাংবাদিকের হঠাৎ সামনে এসে প্রশ্ন করা বোঝাচ্ছে।",
      },
      ACQUIT: {
        word: "ACQUIT",
        pos: "Verb",
        bn: "অভিযোগ থেকে বেকসুর খালাস দেওয়া",
        example:
          "The jury voted to acquit the defendant due to lack of evidence.",
        mnemonic: "Act + Quit — অভিযোগের ঝামেলা থেকে পুরোপুরি মুক্ত বা খালাস।",
        synonyms: ["Exonerate", "Absolve", "Clear"],
        antonyms: ["Convict", "Condemn"],
        context: "মক্কেলকে নির্দোষ প্রমাণ করে মুক্তি দেওয়ার অর্থে ব্যবহৃত।",
      },
      ADDUCE: {
        word: "ADDUCE",
        pos: "Verb",
        bn: "প্রমাণ বা যুক্তি হিসেবে উপস্থাপন করা",
        example:
          "She was able to adduce several historical records to support her claim.",
        mnemonic: "Add + Produce — যুক্তির পক্ষে নতুন প্রমাণ হাজির করা।",
        synonyms: ["Cite", "Present", "Offer"],
        antonyms: ["Conceal", "Suppress"],
        context: "বিচারকের সামনে প্রামাণ্য তথ্য তুলে ধরা বোঝাচ্ছে।",
      },
      BELLIGERENT: {
        word: "BELLIGERENT",
        pos: "Adjective",
        bn: "আক্রমণাত্মক, কলহপ্রিয়, যুদ্ধংদেহী",
        example: "His belligerent tone turned a calm debate into an argument.",
        mnemonic:
          "Belli (যুদ্ধ) + Rent — সবসময় ঝগড়া বা আক্রমণাত্মক মেজাজে থাকা।",
        synonyms: ["Hostile", "Aggressive", "Combative"],
        antonyms: ["Peaceful", "Amiable"],
        context: "বিপক্ষের আইনজীবীর উগ্র ও আক্রমণাত্মক আচরণ বোঝাতে বসেছে।",
      },
      CHICANERY: {
        word: "CHICANERY",
        pos: "Noun",
        bn: "ছলচাতুরী, প্রতারণামূলক কৌশল",
        example:
          "The investigation exposed financial chicanery within the firm.",
        mnemonic:
          "Chicken + Trickery — মুরগির মতো এদিক-ওদিক পালিয়ে ছলচাতুরী করা।",
        synonyms: ["Deception", "Trickery", "Subterfuge"],
        antonyms: ["Honesty", "Candor"],
        context: "মামলা ঘোরানোর জন্য করা কূটকৌশল বোঝাচ্ছে।",
      },
      CORROBORATE: {
        word: "CORROBORATE",
        pos: "Verb",
        bn: "সত্যতা সমর্থন বা নিশ্চিত করা",
        example:
          "Two independent witnesses corroborated the driver’s statement.",
        mnemonic:
          "Co (সাথে) + Roborate (শক্তিশালী) — আরেকটি প্রমাণ দিয়ে কথাকে আরও শক্তিশালী করা।",
        synonyms: ["Confirm", "Verify", "Substantiate"],
        antonyms: ["Contradict", "Refute"],
        context: "সিসিটিভি ফুটেজ দিয়ে যুক্তির সত্যতা প্রমাণিত হওয়া বোঝাচ্ছে।",
      },
    },
  },
];

const FLASHCARDS = [
  {
    word: "RETICENT",
    pos: "Adjective",
    bn: "স্বল্পভাষী / সংযত",
    hackTitle: "Roti + Cent",
    hackDetail:
      "'রুটি' বা 'কথা' বলার জন্য এক পয়সাও খরচ করতে নারাজ — অর্থাৎ খুব কম কথা বলে!",
    synonyms: "Reserved, Taciturn",
    antonyms: "Garrulous, Talkative",
  },
  {
    word: "AMELIORATE",
    pos: "Verb",
    bn: "উন্নতি করা / লাঘব করা",
    hackTitle: "Ameli + Orate",
    hackDetail:
      "'আমেলি' নামের মেয়েটি দারুণ কথা বলে খারাপ পরিস্থিতির উন্নতি ঘটায়।",
    synonyms: "Improve, Alleviate",
    antonyms: "Aggravate, Worsen",
  },
  {
    word: "CENSURE",
    pos: "Noun / Verb",
    bn: "তিরস্কার / কঠোর নিন্দা",
    hackTitle: "Sen + Sure",
    hackDetail:
      "সেন্সর বোর্ড কোনো আপত্তিকর দৃশ্য দেখলেই নিশ্চিতভাবে তিরস্কার করে।",
    synonyms: "Reprimand, Rebuke",
    antonyms: "Commend, Praise",
  },
  {
    word: "ACUMEN",
    pos: "Noun",
    bn: "তীক্ষ্ণ বুদ্ধি / বিচক্ষণতা",
    hackTitle: "Acute + Men",
    hackDetail:
      "Acute মানে তীক্ষ্ণ — যে মানুষের বুদ্ধি অত্যন্ত তীক্ষ্ণ ও সূক্ষ্ম।",
    synonyms: "Astuteness, Shrewdness",
    antonyms: "Naivety, Ignorance",
  },
  {
    word: "CORROBORATE",
    pos: "Verb",
    bn: "প্রমাণ দিয়ে সমর্থন করা",
    hackTitle: "Co + Roborate",
    hackDetail:
      "Co (সাথে) + Robust (শক্তিশালী) — অতিরিক্ত প্রমাণ দিয়ে কোনো বক্তব্যকে পাকাপোক্ত করা।",
    synonyms: "Substantiate, Confirm",
    antonyms: "Contradict, Disprove",
  },
  {
    word: "CHICANERY",
    pos: "Noun",
    bn: "ছলচাতুরী / কূটকৌশল",
    hackTitle: "Chicken + Trickery",
    hackDetail: "ধরা পড়ার ভয়ে এদিক-ওদিক ছুটে ছলচাতুরী ও প্রতারণার আশ্রয় নেওয়া।",
    synonyms: "Subterfuge, Deception",
    antonyms: "Candor, Honesty",
  },
];

const FAQS = [
  {
    q: "ইন্টারঅ্যাক্টিভ ৩ডি ফ্ল্যাশকার্ড কি আলাদাভাবে কেনা যাবে?",
    a: "না, ফ্ল্যাশকার্ড আলাদাভাবে বিক্রি হয় না। তবে মাত্র ১৫০৳-এর মেগা বান্ডেল অফারে (নিয়মিত মূল্য ৩০০৳) প্রো ইবুকের ডে ও নাইট দুটি ৩৫৭ পৃষ্ঠার ইলাস্ট্রেটেড PDF-এর সাথেই ১,৮৭৭ শব্দের ইন্টারঅ্যাক্টিভ ৩ডি ফ্ল্যাশকার্ড অ্যাপ (অফলাইন UK/US অডিওসহ) ও Anki ডেক একসাথে পাবেন।",
  },
  {
    q: "ইবুকটি অর্ডার করার পর কীভাবে এবং কখন হাতে পাব?",
    a: "আমাদের বিকাশ নম্বরে (01511808472) ১০০৳ পাঠিয়ে ট্রানজেকশন আইডি বা স্ক্রিনশট হোয়াটসঅ্যাপে পাঠানোর সাথে সাথেই আপনাকে ৩০৪ পৃষ্ঠার হাই-কোয়ালিটি PDF ইবুকটি পাঠিয়ে দেওয়া হবে।",
  },
  {
    q: "এটি কি শুধু GRE, GMAT বা SAT পরীক্ষার্থীদের জন্য?",
    a: "মূলত GRE, GMAT এবং SAT-এর হাই-ফ্রিকোয়েন্সি ২,০০০+ শব্দ নিয়ে তৈরি হলেও IELTS, BCS, Bank Job এবং ইংরেজি রিডিং স্কিল বাড়াতে চাওয়া যেকোনো শিক্ষার্থী ও পেশাজীবীর জন্য এটি দারুণ কার্যকর।",
  },
  {
    q: "আগের ৫০ গল্পের সংস্করণের সাথে এই নতুন ১০০ গল্পের সংস্করণের পার্থক্য কী?",
    a: "আগের ১–৫০ গল্পের সব বানান ও তথ্যগত ত্রুটি সংশোধন করা হয়েছে, তার সাথে সম্পূর্ণ নতুন ৫১–১০০ নম্বর আরও ৫০টি গল্পে ১,০০০টি একদম নতুন (জিরো ওভারল্যাপ) শব্দ যোগ করা হয়েছে। এছাড়া পুরো ৩০৪ পৃষ্ঠা চোখের আরামের জন্য নতুন আই-ফ্রেন্ডলি লাইট থিমে ডিজাইন করা হয়েছে।",
  },
  {
    q: "মুখস্থ করা ছাড়া সত্যিই কি গল্প পড়ে শব্দ মনে রাখা সম্ভব?",
    a: "হ্যাঁ! প্রতিটি গল্পে শব্দগুলো বাস্তব বাংলা প্রেক্ষাপটে বসানো আছে, তার ঠিক নিচেই থাকছে শব্দের অর্থ, ইংরেজি উদাহরণ, বাংলা মেমোরি হ্যাক (Mnemonic) এবং সিনোনিম-অ্যান্টোনিম—ফলে মস্তিষ্ক ছবি ও গল্পের মাধ্যমে শব্দগুলো দীর্ঘদিন মনে রাখে।",
  },
  {
    q: "পেমেন্ট কীভাবে করব এবং দাম কত?",
    a: "ইবুকটির প্রকৃত দাম ২০০৳, তবে এখন ৫০% ডিসকাউন্টে পাচ্ছেন মাত্র ১০০৳-এ! আপনি সরাসরি বিকাশের মাধ্যমে ১০০৳ পাঠিয়ে ট্রানজেকশন আইডি অথবা স্ক্রিনশট আমাদের হোয়াটসঅ্যাপ নম্বরে (01737808472) পাঠিয়ে দিলেই ইবুকটি পেয়ে যাবেন।",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [selectedWordKey, setSelectedWordKey] = useState("RETICENT");
  const [storyViewMode, setStoryViewMode] = useState("interactive");

  // Flashcard state
  const [cardIdx, setCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState({});

  // Eye-comfort comparison toggle
  const [readingTheme, setReadingTheme] = useState("light");

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  // Manual bKash Order Modal state
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("bundle"); // 'ebook' | 'bundle'
  const [copiedField, setCopiedField] = useState(""); // 'bkash' | 'whatsapp' | ''

  const currentStory = STORIES[activeStoryIdx];
  const storyWordList = Object.values(currentStory.words);
  const activeWord = currentStory.words[selectedWordKey] || storyWordList[0];

  const handleStorySwitch = (idx) => {
    setActiveStoryIdx(idx);
    const firstKey = Object.keys(STORIES[idx].words)[0];
    setSelectedWordKey(firstKey);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentCard = FLASHCARDS[cardIdx];
  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  const handleCardNav = (dir) => {
    setIsFlipped(false);
    setCardIdx((prev) => (prev + dir + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const toggleMastered = (word) => {
    setMasteredCards((prev) => ({ ...prev, [word]: !prev[word] }));
  };

  const handleCopy = (text, field) => {
    const markCopied = () => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(markCopied)
        .catch(() => {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand("copy");
          } catch (_) {}
          document.body.removeChild(ta);
          markCopied();
        });
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (_) {}
      document.body.removeChild(ta);
      markCopied();
    }
  };

  const openOrderModal = (plan = "ebook") => {
    setSelectedPlan(plan === "bundle" ? "bundle" : "ebook");
    setCopiedField("");
    setOrderModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#FAF8FF] via-[#F6F1FF] to-[#FAF8FF] text-[#1F1B2E] antialiased selection:bg-[#7C3AED] selection:text-white"
      style={{
        fontFamily:
          "'Hind Siliguri', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Sticky Navigation Bar — Clean Top Start (No Top Banner) */}
      <header className="sticky top-0 z-40 bg-[#FAF8FF]/90 backdrop-blur-md border-b border-[#E7DEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-20">
            {/* Left: Vocab Hero Superhero Logo + Brand Name + Only Mr. Grasshopper */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group text-left focus:outline-none shrink-0"
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden ring-2 ring-[#A855F7] shadow-md shadow-purple-500/20 bg-gradient-to-br from-[#6D28D9] to-[#A855F7] group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={MEDIA.logo}
                    alt="Vocab Hero Superhero Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#7C3AED] to-[#C026D3] text-[#FEF08A] text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow">
                  HERO
                </span>
              </div>
              <div className="shrink-0">
                <div className="whitespace-nowrap text-lg sm:text-xl font-extrabold tracking-tight leading-tight">
                  <span className="text-[#3B0764]">গল্পে শিখি </span>
                  <span className="bg-gradient-to-r from-[#7C3AED] to-[#C026D3] bg-clip-text text-transparent">
                    Vocabulary!
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#6B5B95] whitespace-nowrap mt-0.5">
                  Mr. Grasshopper
                </p>
              </div>
            </button>

            {/* Desktop Nav Links — strictly single-line with whitespace-nowrap */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-bold text-[#4B3F6B]">
              <button
                onClick={() => scrollToSection("promo-video")}
                className="whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
              >
                প্রোমো ভিডিও
              </button>
              <button
                onClick={() => scrollToSection("sample-story")}
                className="whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
              >
                নমুনা গল্প
              </button>
              <button
                onClick={() => scrollToSection("memory-hacks")}
                className="whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
              >
                মেমোরি হ্যাক
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
              >
                বৈশিষ্ট্য
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
              >
                প্রশ্নোত্তর
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={openOrderModal}
                className="whitespace-nowrap inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C026D3] hover:brightness-110 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-purple-500/25 transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-[#FDE047] shrink-0" />
                অর্ডার করুন — ১০০৳
              </button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#4C1D95] hover:bg-[#EDE9FE] transition-colors shrink-0"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8FF] border-t border-[#E7DEFF] px-4 pt-3 pb-5 space-y-2 shadow-lg">
            {[
              { id: "promo-video", label: "প্রোমো ভিডিও দেখুন" },
              { id: "sample-story", label: "নমুনা গল্প পড়ুন" },
              { id: "memory-hacks", label: "মেমোরি হ্যাক ফ্ল্যাশকার্ড" },
              { id: "features", label: "ইবুকের বৈশিষ্ট্য" },
              { id: "faq", label: "সাধারণ প্রশ্নোত্তর" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-[#2E1065] hover:bg-[#EDE9FE]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={openOrderModal}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C026D3] text-white font-bold text-sm px-4 py-3 rounded-xl shadow"
            >
              <Sparkles className="w-4 h-4 text-[#FDE047]" />
              ৫০% ছাড়ে অর্ডার করুন (১০০৳)
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION: Right Below Logo, Large Vocab Hero Superhero Display */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20">
        {/* Soft Violet & Lavender Ambient Glows */}
        <div
          className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(232,121,249,0.22) 50%, transparent 75%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(196,181,253,0.18) 55%, transparent 75%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Offer & Exam Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F3E8FF] to-[#FCE7F3] text-[#7E22CE] border border-[#D8B4FE] font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full">
                  <Flame className="w-4 h-4 text-[#C026D3]" />
                  ৫০% ডিসকাউন্ট • ২০০৳-এর ইবুক মাত্র ১০০৳!
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#EDE9FE] text-[#5B21B6] font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full">
                  <GraduationCap className="w-4 h-4" />
                  GRE • GMAT • SAT
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.18] tracking-tight text-[#2E1065]">
                মুখস্থ নয়—গল্প পড়েই হয়ে উঠুন সত্যিকারের{" "}
                <span className="relative inline-block bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
                  VOCAB HERO!
                  <span className="absolute left-0 -bottom-1 w-full h-2.5 bg-[#FDE047]/70 -z-10 rounded-full" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4B3F6B] leading-relaxed max-w-2xl">
                ডিকশনারি বা লম্বা তালিকা মুখস্থ করে বারবার ভুলে যাওয়ার দিন শেষ।{" "}
                <strong className="text-[#2E1065]">
                  ১০০টি দারুণ বাংলা গল্পের
                </strong>{" "}
                ভেতর দিয়ে শিখুন{" "}
                <strong className="text-[#7C3AED]">
                  ২,০০০+ হাই-ফ্রিকোয়েন্সি ইংরেজি শব্দ
                </strong>
                —প্রতিটি গল্পের সাথে থাকছে বাংলা অর্থ, ইংরেজি উদাহরণ,{" "}
                <strong className="text-[#5B21B6]">৫৯৬+ মেমোরি হ্যাক</strong>{" "}
                এবং সিনোনিম-অ্যান্টোনিম।
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  onClick={openOrderModal}
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C026D3] hover:brightness-110 text-white font-extrabold text-base px-7 py-4 rounded-2xl shadow-xl shadow-purple-500/30 transition-all hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5 text-[#FDE047]" />
                  <span>৫০% ছাড়ে সংগ্রহ করুন — ১০০৳</span>
                  <span className="text-xs line-through text-white/75 font-semibold">
                    ২০০৳
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("promo-video")}
                  className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-[#F3E8FF] text-[#5B21B6] border-2 border-[#DDD6FE] font-bold text-base px-6 py-4 rounded-2xl transition-colors"
                >
                  <PlayCircle className="w-5 h-5 text-[#9333EA]" />
                  ভিডিও দেখে নিন
                </button>
              </div>

              {/* Micro Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Download, text: "ডে + নাইট দুটি ৩৫৭ পৃষ্ঠার PDF" },
                  { icon: Eye, text: "১০০টি গল্পে জিবলি-স্টাইল ছবি" },
                  {
                    icon: ShieldCheck,
                    text: "বান্ডেলে ১,৮৭৭ শব্দের ৩ডি ফ্ল্যাশকার্ড",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4B3F6B] bg-white/80 border border-[#E7DEFF] rounded-xl px-3.5 py-2.5 shadow-sm"
                  >
                    <item.icon className="w-4 h-4 text-[#7C3AED] shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Column: Large Vocab Hero Superhero Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[430px]">
                {/* Violet-Gold Hero Backplate Glow */}
                <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#7C3AED] via-[#FACC15] to-[#EC4899] opacity-30 blur-xl" />

                {/* Main Superhero Showcase Card */}
                <div className="relative rounded-[28px] p-3 bg-gradient-to-b from-white to-[#F3E8FF] border-2 border-[#DDD6FE] shadow-2xl shadow-purple-500/20">
                  <div className="relative rounded-[22px] overflow-hidden bg-[#2E1065]">
                    <img
                      src={MEDIA.hero}
                      alt="গল্পে শিখি Vocabulary! — Vocab Hero Superhero Cover"
                      className="w-full h-auto object-cover block"
                    />
                    {/* Top-Right 50% OFF Ribbon */}
                    <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-[#FACC15] to-[#FDE047] text-[#2E1065] font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-white/80">
                      <Zap className="w-3.5 h-3.5 fill-[#7C3AED] text-[#7C3AED]" />
                      ৫০% ছাড় • ১০০৳
                    </div>
                  </div>

                  {/* Bottom Caption Strip */}
                  <div className="mt-3 px-2 pb-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-xs font-bold text-[#3B0764]">
                        Vocab Hero • ১০০ গল্পের পূর্ণাঙ্গ এডিশন
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-[#7C3AED] bg-[#EDE9FE] px-2.5 py-1 rounded-lg">
                      ৩০৪ পৃষ্ঠা
                    </span>
                  </div>
                </div>

                {/* Floating Stat Card — Top Left */}
                <div className="hidden sm:flex items-center gap-2.5 absolute -left-8 top-10 bg-white/95 backdrop-blur border border-[#E7DEFF] shadow-xl shadow-purple-500/10 rounded-2xl px-4 py-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] text-[#7C3AED] flex items-center justify-center">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#2E1065] leading-tight">
                      ১০০টি গল্প
                    </p>
                    <p className="text-[11px] font-medium text-[#6B5B95]">
                      ৫০ ক্লাসিক + ৫০ নতুন
                    </p>
                  </div>
                </div>

                {/* Floating Stat Card — Bottom Right */}
                <div className="hidden sm:flex items-center gap-2.5 absolute -right-6 bottom-14 bg-white/95 backdrop-blur border border-[#E7DEFF] shadow-xl shadow-purple-500/10 rounded-2xl px-4 py-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FCE7F3] to-[#F3E8FF] text-[#C026D3] flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#7C3AED] leading-tight">
                      ২,০০০+ শব্দ
                    </p>
                    <p className="text-[11px] font-medium text-[#6B5B95]">
                      GRE • GMAT • SAT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Card Metrics Strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                value: "১০০টি গল্প",
                label: "১–৫০ পরিমার্জিত + ৫১–১০০ সম্পূর্ণ নতুন",
                icon: BookOpen,
                accent:
                  "text-[#7C3AED] bg-gradient-to-br from-[#F3E8FF] to-[#EDE9FE]",
              },
              {
                value: "২,০০০+ শব্দ",
                label: "GRE, GMAT ও SAT হাই-ফ্রিকোয়েন্সি ভোকাব",
                icon: Layers,
                accent:
                  "text-[#C026D3] bg-gradient-to-br from-[#FCE7F3] to-[#F5D0FE]",
              },
              {
                value: "৫৯৬+ হ্যাক",
                label: "বাংলা মেমোরি হ্যাক ও কন্টেক্সট চেক",
                icon: Lightbulb,
                accent:
                  "text-[#B45309] bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]",
              },
              {
                value: "৩৫৭ পৃষ্ঠা",
                label: "চোখের আরামের ওয়ার্ম-আইভরি লাইট থিম",
                icon: FileText,
                accent:
                  "text-[#047857] bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-[#F9F6FF] rounded-2xl p-5 border border-[#E7DEFF] shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.accent}`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#2E1065]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-[#6B5B95] mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GENERATED PROMO VIDEO SECTION — Right After Hero Section */}
      <section
        id="promo-video"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#F3EEFF] via-[#FAF5FF] to-[#FDF2F8] border-y border-[#E7DEFF]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Vertical 9:16 Video inside sleek modern phone frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[310px]">
                <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-tr from-[#7C3AED] via-[#C026D3] to-[#FACC15] opacity-30 blur-xl" />
                <div className="relative rounded-[34px] p-2.5 bg-gradient-to-b from-[#4C1D95] via-[#6D28D9] to-[#7E22CE] shadow-2xl shadow-purple-700/25">
                  <div className="rounded-[26px] overflow-hidden bg-black aspect-[9/16]">
                    <video
                      src={MEDIA.promoVideo}
                      poster={MEDIA.videoPoster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Video Context & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#7C3AED] bg-white border border-[#DDD6FE] px-3.5 py-1.5 rounded-full shadow-sm">
                <PlayCircle className="w-4 h-4 text-[#C026D3]" />
                অফিশিয়াল প্রোমো ভিডিও
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E1065] leading-tight">
                মাত্র ১ মিনিটে দেখে নিন—কীভাবে{" "}
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#C026D3] bg-clip-text text-transparent">
                  গল্পে শিখি Vocabulary!
                </span>{" "}
                আপনার ইংরেজি শেখা সহজ করে দেবে
              </h2>

              <p className="text-sm sm:text-base text-[#4B3F6B] leading-relaxed">
                ভোকাবুলারি মুখস্থ করে ভুলে যাওয়ার ঝামেলা থেকে বেরিয়ে এসে কীভাবে
                মাত্র কয়েক সপ্তাহে ২,০০০+ হাই-ফ্রিকোয়েন্সি শব্দ আত্মস্থ করবেন,
                তার পুরো ঝলক দেখুন এই ভিডিওতে।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "১০০% গল্পভিত্তিক শেখা",
                    desc: "একঘেয়ে তালিকা নয়, প্রতিটি শব্দ মনে থাকবে গল্পের দৃশ্য দিয়ে।",
                  },
                  {
                    title: "৫০% লঞ্চিং ডিসকাউন্ট",
                    desc: "প্রকৃত দাম ২০০৳ হলেও এখন পাচ্ছেন মাত্র ১০০৳-এ।",
                  },
                  {
                    title: "সহজ বিকাশ অর্ডার",
                    desc: "বিকাশে ১০০৳ পাঠিয়ে হোয়াটসঅ্যাপে স্ক্রিনশট দিলেই ডেলিভারি।",
                  },
                  {
                    title: "যেকোনো ডিভাইসে পড়া",
                    desc: "মোবাইল, ট্যাবলেট, ল্যাপটপ বা প্রিন্ট—সবখানেই ঝকঝকে।",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 rounded-2xl p-4 border border-[#E7DEFF] shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-extrabold text-sm text-[#3B0764] mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#6B5B95] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <button
                  onClick={openOrderModal}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C026D3] hover:brightness-110 text-white font-extrabold text-sm sm:text-base px-7 py-4 rounded-2xl shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5 text-[#FDE047]" />
                  এখনই ১০০৳-এ অর্ডার করুন
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SAMPLE STORY & INSTANT WORD INSPECTOR */}
      <section id="sample-story" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#7C3AED] bg-[#EDE9FE] px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                লাইভ ইন্টারেক্টিভ প্রিভিউ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E1065]">
                আসল গল্প পড়ে দেখুন—যেকোনো ইংরেজি শব্দে ক্লিক করুন!
              </h2>
              <p className="text-sm sm:text-base text-[#5B4E7A] mt-2 max-w-2xl">
                ইবুকের ভেতর গল্পগুলো ঠিক কীভাবে সাজানো আছে তা সরাসরি এখানেই
                যাচাই করুন। হাইলাইট করা যেকোনো শব্দে ক্লিক করলেই ডান পাশে অর্থ,
                মেমোরি হ্যাক ও উদাহরণ দেখতে পাবেন।
              </p>
            </div>

            {/* Mode Toggle */}
            <div className="inline-flex bg-white p-1.5 rounded-2xl border border-[#E7DEFF] shadow-sm self-start md:self-auto">
              <button
                onClick={() => setStoryViewMode("interactive")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  storyViewMode === "interactive"
                    ? "bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white shadow"
                    : "text-[#5B4E7A] hover:text-[#6D28D9]"
                }`}
              >
                ইন্টারেক্টিভ গল্প
              </button>
              <button
                onClick={() => setStoryViewMode("preview")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  storyViewMode === "preview"
                    ? "bg-gradient-to-r from-[#9333EA] to-[#C026D3] text-white shadow"
                    : "text-[#5B4E7A] hover:text-[#9333EA]"
                }`}
              >
                আসল ইবুক পেজ দেখুন
              </button>
            </div>
          </div>

          {/* Story Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {STORIES.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => handleStorySwitch(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  activeStoryIdx === idx
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white border-transparent shadow-md shadow-purple-500/25"
                    : "bg-white text-[#3B0764] border-[#E7DEFF] hover:border-[#A855F7]"
                }`}
              >
                <span>{story.number}:</span>
                <span className="font-semibold">{story.title}</span>
              </button>
            ))}
          </div>

          {storyViewMode === "interactive" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left: Story Reader Card */}
              <div className="lg:col-span-7 bg-gradient-to-br from-white to-[#FAF7FF] rounded-3xl p-6 sm:p-8 border border-[#E7DEFF] shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#EDE9FE]">
                  <div>
                    <span className="text-xs font-bold text-[#7C3AED] bg-[#EDE9FE] px-2.5 py-1 rounded-md">
                      {currentStory.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2E1065] mt-2">
                      {currentStory.number} — {currentStory.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#6B5B95] bg-[#F5F3FF] px-3 py-1.5 rounded-xl border border-[#E7DEFF]">
                    {storyWordList.length}টি হাই-ফ্রিকোয়েন্সি শব্দ
                  </span>
                </div>

                <p className="text-base sm:text-lg leading-[2.05] text-[#27203A]">
                  {currentStory.segments.map((seg, i) => {
                    if (!seg.word) {
                      return <span key={i}>{seg.text}</span>;
                    }
                    const isSelected = activeWord.word === seg.word;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedWordKey(seg.word)}
                        className={`inline-flex items-center mx-1 px-2.5 py-0.5 rounded-lg font-extrabold text-sm sm:text-base tracking-wide transition-all cursor-pointer align-baseline ${
                          isSelected
                            ? "bg-gradient-to-r from-[#7C3AED] to-[#C026D3] text-[#FEF08A] ring-2 ring-[#FACC15] shadow-sm scale-[1.03]"
                            : "bg-[#F3E8FF] text-[#6D28D9] hover:bg-[#7C3AED] hover:text-white border border-[#DDD6FE]"
                        }`}
                      >
                        {seg.word}
                      </button>
                    );
                  })}
                </p>

                <div className="mt-7 pt-5 border-t border-[#EDE9FE]">
                  <p className="text-xs font-bold text-[#6B5B95] mb-2.5">
                    এই গল্পের যেকোনো শব্দ বাছাই করুন:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {storyWordList.map((w) => (
                      <button
                        key={w.word}
                        onClick={() => setSelectedWordKey(w.word)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                          activeWord.word === w.word
                            ? "bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] text-white shadow"
                            : "bg-white text-[#4C1D95] border border-[#DDD6FE] hover:border-[#7C3AED]"
                        }`}
                      >
                        {w.word}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Live Word Inspector Panel */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#DDD6FE] shadow-xl shadow-purple-500/10">
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#F3EEFF]">
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#6D28D9] bg-[#EDE9FE] px-2.5 py-1 rounded-md">
                      {activeWord.pos}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#6D28D9] to-[#C026D3] bg-clip-text text-transparent mt-2 tracking-tight">
                      {activeWord.word}
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-[#2E1065] mt-0.5">
                      {activeWord.bn}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] text-[#B45309] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Mnemonic Box */}
                <div className="mt-5 bg-gradient-to-r from-[#FEF9E6] to-[#FFFBEB] border border-[#FDE047] rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#92400E] mb-1">
                    <Brain className="w-4 h-4" />
                    মেমোরি হ্যাক (Mnemonic)
                  </div>
                  <p className="text-sm font-semibold text-[#1F1B2E] leading-relaxed">
                    {activeWord.mnemonic}
                  </p>
                </div>

                {/* Example Sentence */}
                <div className="mt-4 bg-[#FAF8FF] rounded-2xl p-4 border border-[#E7DEFF]">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B5B95] mb-1">
                    English Example
                  </p>
                  <p className="text-sm italic text-[#3B0764] font-medium leading-relaxed">
                    “{activeWord.example}”
                  </p>
                </div>

                {/* Synonyms & Antonyms */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-3">
                    <p className="text-[11px] font-extrabold text-[#047857] mb-1.5">
                      Synonyms (সমার্থক)
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeWord.synonyms.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-semibold bg-white text-[#047857] px-2 py-0.5 rounded-md border border-[#A7F3D0]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-xl p-3">
                    <p className="text-[11px] font-extrabold text-[#BE185D] mb-1.5">
                      Antonyms (বিপরীত)
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeWord.antonyms.map((a) => (
                        <span
                          key={a}
                          className="text-xs font-semibold bg-white text-[#BE185D] px-2 py-0.5 rounded-md border border-[#FBCFE8]"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Context Check */}
                <div className="mt-4 flex items-start gap-2.5 text-xs sm:text-sm text-[#4B3F6B] bg-[#F5F3FF] rounded-xl p-3.5 border border-[#E7DEFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#4C1D95]">
                      কন্টেক্সট চেক:{" "}
                    </span>
                    {activeWord.context}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DEFF] shadow-lg">
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border-2 border-[#E7DEFF] shadow-xl bg-[#FAF8F3]">
                  <img
                    src={MEDIA.preview}
                    alt="গল্পে শিখি Vocabulary! আসল লাইট-থিম পেজ প্রিভিউ"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#047857] bg-[#ECFDF5] px-3 py-1 rounded-full">
                  <Eye className="w-3.5 h-3.5" />
                  আসল ৩০৪ পৃষ্ঠার PDF-এর ভেতরের পাতা
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E1065]">
                  পরিচ্ছন্ন টাইপোগ্রাফি, চোখের ওপর জিরো চাপ!
                </h3>
                <p className="text-sm sm:text-base text-[#4B3F6B] leading-relaxed">
                  মোবাইল বা ল্যাপটপের স্ক্রিনে দীর্ঘক্ষণ পড়লেও যেন চোখ ব্যথা না
                  করে, সেজন্য পুরো ইবুকটি ওয়ার্ম আইভরি কাগজের টোনে রিডিজাইন করা
                  হয়েছে। প্রতিটি গল্পের পরই থাকছে গুছানো ভোকাবুলারি টেবিল এবং
                  মেমোরি হ্যাক বক্স।
                </p>
                <div className="space-y-2.5">
                  {[
                    "প্রতিটি গল্পে বোল্ড ও কালার-কোডেড ইংরেজি শব্দ",
                    "নিচেই টেবিল আকারে বাংলা অর্থ ও ইংরেজি বাক্য",
                    "আলাদা ইউনিক এজ (Mnemonic + Synonym + Antonym) বক্স",
                    "প্রিন্ট করে পড়ার জন্যও ১০০% উপযোগী লেআউট",
                  ].map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-sm font-semibold text-[#2E1065]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={openOrderModal}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#C026D3] hover:brightness-110 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  মাত্র ১০০৳-এ পুরো ৩০৪ পৃষ্ঠা নিন
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE MEMORY HACK FLASHCARDS */}
      <section
        id="memory-hacks"
        className="py-16 sm:py-20 bg-gradient-to-b from-[#F5F0FF] to-[#FAF8FF] border-t border-[#E7DEFF]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#92400E] bg-[#FEF3C7] px-3.5 py-1 rounded-full mb-3">
              <Brain className="w-3.5 h-3.5" />
              ৫৯৬+ মেমোরি হ্যাকের নমুনা
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E1065]">
              কার্ডে ক্লিক করে দেখুন—কীভাবে ১ সেকেন্ডে শব্দ মাথায় গেঁথে যায়!
            </h2>
            <p className="text-sm sm:text-base text-[#5B4E7A] mt-2">
              কঠিন GRE শব্দগুলোকে মজার বাংলা ছন্দ ও সূত্র দিয়ে মনে রাখার কৌশল।
              নিচের কার্ডটিতে ক্লিক করে ফ্লিপ করুন।
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-6 flex items-center justify-between text-xs sm:text-sm font-bold text-[#4C1D95]">
            <span>
              কার্ড {cardIdx + 1} / {FLASHCARDS.length}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#047857] bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5" />
              আয়ত্ত করেছেন: {masteredCount} / {FLASHCARDS.length}
            </span>
          </div>

          <div className="max-w-xl mx-auto">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsFlipped(!isFlipped);
                }
              }}
              className={`cursor-pointer rounded-3xl p-7 sm:p-9 min-h-[290px] flex flex-col justify-between transition-all duration-300 shadow-xl border-2 select-none ${
                isFlipped
                  ? "bg-gradient-to-br from-[#5B21B6] via-[#7C3AED] to-[#9333EA] text-white border-[#FDE047]"
                  : "bg-gradient-to-br from-white to-[#FAF6FF] text-[#1F1B2E] border-[#DDD6FE] hover:border-[#A855F7]"
              }`}
            >
              {!isFlipped ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] px-3 py-1 rounded-lg">
                      {currentCard.pos}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9333EA]">
                      <RotateCw className="w-3.5 h-3.5" />
                      মেমোরি হ্যাক দেখতে ক্লিক করুন
                    </span>
                  </div>

                  <div className="text-center my-6">
                    <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#6D28D9] to-[#C026D3] bg-clip-text text-transparent">
                      {currentCard.word}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-[#6B5B95] mt-3">
                      এই শব্দের অর্থ ও বাংলা মেমোরি হ্যাক জানেন কি?
                    </p>
                  </div>

                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-bold bg-[#F5F3FF] text-[#5B21B6] border border-[#DDD6FE] px-4 py-2 rounded-full">
                      ট্যাপ করে উত্তর উল্টে দেখুন
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold bg-[#FDE047] text-[#2E1065] px-3 py-1 rounded-lg">
                      মেমোরি হ্যাক: {currentCard.hackTitle}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/85">
                      <RotateCw className="w-3.5 h-3.5" />
                      আবার ঘোরান
                    </span>
                  </div>

                  <div className="my-5 space-y-3">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#FEF08A]">
                        {currentCard.word}
                      </span>
                      <span className="text-lg font-bold text-white">
                        = {currentCard.bn}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-white/95 leading-relaxed bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/20">
                      {currentCard.hackDetail}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/15 rounded-xl px-3 py-2">
                      <span className="text-[#A7F3D0] font-bold block">
                        Synonyms
                      </span>
                      <span className="text-white/95">
                        {currentCard.synonyms}
                      </span>
                    </div>
                    <div className="bg-white/15 rounded-xl px-3 py-2">
                      <span className="text-[#FBCFE8] font-bold block">
                        Antonyms
                      </span>
                      <span className="text-white/95">
                        {currentCard.antonyms}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                onClick={() => handleCardNav(-1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#DDD6FE] text-sm font-bold text-[#4C1D95] hover:bg-[#F5F3FF] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                আগেরটি
              </button>

              <button
                onClick={() => toggleMastered(currentCard.word)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                  masteredCards[currentCard.word]
                    ? "bg-[#059669] text-white border-[#059669]"
                    : "bg-white text-[#047857] border-[#A7F3D0] hover:bg-[#ECFDF5]"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {masteredCards[currentCard.word] ? "আয়ত্ত হয়েছে!" : "মনে থাকবে"}
              </button>

              <button
                onClick={() => handleCardNav(1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#DDD6FE] text-sm font-bold text-[#4C1D95] hover:bg-[#F5F3FF] transition-colors"
              >
                পরেরটি
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP VOCAB HERO METHOD + EYE-COMFORT COMPARISON */}
      <section
        id="features"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#F4EEFF] via-[#FAF8FF] to-[#FDF2F8] border-y border-[#E7DEFF]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#6D28D9] bg-[#EDE9FE] px-3.5 py-1 rounded-full mb-3">
              <Star className="w-3.5 h-3.5" />
              কেন এই ইবুকটি সেরা?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E1065]">
              মাত্র ৪ ধাপে ভোকাবুলারি শেখার বৈজ্ঞানিক পদ্ধতি
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              {
                step: "০১",
                title: "রঙিন গল্পে ডুব দিন",
                desc: "প্রতিটি অধ্যায়ে আছে ছোট ও মজার বাংলা গল্প, যার ভেতরে স্বাভাবিকভাবেই বসানো আছে হাই-ফ্রিকোয়েন্সি শব্দ।",
              },
              {
                step: "০২",
                title: "তাৎক্ষণিক অর্থ ও বাক্য",
                desc: "গল্প শেষ হতেই পাচ্ছেন গোছানো ভোকাবুলারি টেবিল—ডিকশনারি ঘাঁটার কোনো ঝামেলা নেই।",
              },
              {
                step: "০৩",
                title: "মেমোরি হ্যাকে স্থায়ী ছাপ",
                desc: "বাংলা ছন্দ ও কৌশলের মাধ্যমে কঠিন শব্দগুলো একবার পড়লেই মস্তিষ্কে দীর্ঘদিন গেঁথে থাকে।",
              },
              {
                step: "০৪",
                title: "সিনোনিম ও রিভিশন",
                desc: "প্রতিটি শব্দের সমার্থক, বিপরীত শব্দ ও কন্টেক্সট চেক দিয়ে পরীক্ষার আগে দ্রুত রিভিশন করুন।",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gradient-to-br from-white to-[#FAF6FF] rounded-2xl p-6 border border-[#E7DEFF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <span className="text-4xl font-black text-[#F3E8FF] absolute top-3 right-4 select-none">
                  {item.step}
                </span>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#C026D3] text-[#FEF08A] font-extrabold text-sm flex items-center justify-center mb-4 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-extrabold text-[#2E1065] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5B4E7A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Eye-Comfort Comparison Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DEFF] shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2E1065]">
                  চোখের আরামের পার্থক্যটা নিজেই যাচাই করুন
                </h3>
                <p className="text-sm text-[#6B5B95] mt-1">
                  বাটনে ক্লিক করে দেখুন সাধারণ কালো/অগোছালো পিডিএফ বনাম আমাদের
                  নতুন আই-ফ্রেন্ডলি লাইট থিমের পার্থক্য।
                </p>
              </div>
              <div className="inline-flex bg-[#F3EEFF] p-1 rounded-xl self-start">
                <button
                  onClick={() => setReadingTheme("light")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    readingTheme === "light"
                      ? "bg-gradient-to-r from-[#059669] to-[#10B981] text-white shadow"
                      : "text-[#5B4E7A]"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  নতুন আই-ফ্রেন্ডলি থিম
                </button>
                <button
                  onClick={() => setReadingTheme("old")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    readingTheme === "old"
                      ? "bg-[#1F1B2E] text-white shadow"
                      : "text-[#5B4E7A]"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  পুরোনো ভারী ডার্ক নোট
                </button>
              </div>
            </div>

            {readingTheme === "light" ? (
              <div className="rounded-2xl p-6 bg-[#FAF8F3] border-2 border-[#10B981]/40 transition-all">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-xs font-extrabold text-[#047857] bg-[#ECFDF5] px-2.5 py-1 rounded-md">
                    নতুন ওয়ার্ম আইভরি এডিশন (#FAF8F3)
                  </span>
                  <span className="text-xs font-bold text-[#047857]">
                    দীর্ঘক্ষণ পড়লেও চোখ ক্লান্ত হয় না
                  </span>
                </div>
                <p className="text-base leading-relaxed text-[#1F242B]">
                  “নতুন পরিবেশে শুরুতে রাফি বেশ{" "}
                  <span className="font-extrabold text-[#7C3AED] bg-[#EDE9FE] px-1.5 py-0.5 rounded">
                    RETICENT
                  </span>{" "}
                  ছিল, তবে নিজের{" "}
                  <span className="font-extrabold text-[#9333EA] bg-[#F3E8FF] px-1.5 py-0.5 rounded">
                    ACUMEN
                  </span>{" "}
                  কাজে লাগিয়ে সে দ্রুতই পরিস্থিতি{" "}
                  <span className="font-extrabold text-[#C026D3] bg-[#FCE7F3] px-1.5 py-0.5 rounded">
                    AMELIORATE
                  </span>{" "}
                  করে ফেলল।”
                </p>
              </div>
            ) : (
              <div className="rounded-2xl p-6 bg-[#13111C] border-2 border-rose-500/40 text-gray-300 transition-all">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-xs font-bold text-rose-300 bg-rose-950/70 px-2.5 py-1 rounded-md">
                    সাধারণ অগোছালো ডার্ক/সাদাকালো নোট
                  </span>
                  <span className="text-xs font-semibold text-rose-300">
                    চোখে চাপ পড়ে ও প্রিন্ট করতে কালি নষ্ট হয়
                  </span>
                </div>
                <p className="text-sm leading-snug text-gray-400 font-mono">
                  1. RETICENT = reserved, quiet. 2. ACUMEN = sharpness of mind.
                  3. AMELIORATE = make better. (কোনো গল্প নেই, মেমোরি হ্যাক
                  নেই—৫ মিনিট পড়লেই ঘুম পায়!)
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 50% DISCOUNT PRICING SECTION (২০০৳ -> ১০০৳, bKash ONLY) */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] bg-gradient-to-br from-[#5B21B6] via-[#7C3AED] to-[#A855F7] text-white p-6 sm:p-11 shadow-2xl shadow-purple-700/25 overflow-hidden">
            <div
              className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: "#FDE047" }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 rounded-full opacity-25 blur-3xl"
              style={{ backgroundColor: "#F472B6" }}
            />

            <div className="relative text-center max-w-2xl mx-auto mb-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-[#FDE047] text-[#2E1065] font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow">
                <Flame className="w-4 h-4 text-[#C026D3]" />
                সীমিত সময়ের জন্য ৫০% ডিসকাউন্ট ও মেগা বান্ডেল অফার!
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                পছন্দের প্যাক বেছে নিন —{" "}
                <span className="text-[#FEF08A]">
                  গল্পে শিখি Vocabulary! প্রো
                </span>
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                প্রতিটি গল্পে জিবলি-স্টাইল ছবি, ডে + নাইট দুটি ৩৫৭ পৃষ্ঠার PDF,
                ৪,১৬৬+ UK/US অডিও লিংক এবং বান্ডেলে পাচ্ছেন ১,৮৭৭ শব্দের
                ইন্টারঅ্যাক্টিভ ৩ডি ফ্ল্যাশকার্ড!
              </p>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <div className="bg-white/95 text-[#1F1B2E] rounded-3xl p-6 sm:p-7 shadow-xl border border-white/60 flex flex-col justify-between">
                <div>
                  <div className="pb-4 border-b border-[#F3EEFF]">
                    <span className="inline-block text-[11px] font-extrabold text-[#7C3AED] bg-[#F3E8FF] px-3 py-1 rounded-full mb-1.5">
                      স্ট্যান্ডার্ড প্রো প্যাক • ৫০% ছাড়
                    </span>
                    <h3 className="text-lg font-extrabold text-[#2E1065]">
                      ভোকাবুলারি প্রো ইবুক (ডে + নাইট)
                    </h3>
                  </div>

                  <div className="my-5 text-center bg-[#FAF8FF] rounded-2xl p-4 border border-[#E7DEFF]">
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="text-lg font-bold text-[#8B7FA8] line-through">
                        ২০০৳
                      </span>
                      <span className="text-4xl sm:text-5xl font-black text-[#6D28D9] tracking-tight">
                        ১০০৳
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#6B5B95] mt-1">
                      একবার পেমেন্টে লাইফটাইম PDF অ্যাক্সেস
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm font-medium text-[#3B2F5C] mb-6">
                    {[
                      "১০০টি সম্পূর্ণ গল্প + ১০০টি জিবলি-স্টাইল ছবি",
                      "ডে (লাইট) + নাইট (ডার্ক) দুটি ৩৫৭ পৃষ্ঠার PDF",
                      "৪,১৬৬+ ক্লিকেবল UK ও US অডিও লিংক",
                      "১০টি কুইজ, ৫০ কনফিউজিং ওয়ার্ড ও ৩০ রুট ম্যাপ",
                      "৩০ দিনের রোডম্যাপ, টপিক ক্লাস্টার ও A–Z ইনডেক্স",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openOrderModal("ebook")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#EDE9FE] hover:bg-[#DDD6FE] text-[#4C1D95] font-extrabold text-base px-6 py-3.5 rounded-2xl transition-all"
                >
                  প্রো ইবুক নিন — ১০০৳
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="relative bg-white text-[#1F1B2E] rounded-3xl p-6 sm:p-7 shadow-2xl border-[3px] border-[#FDE047] flex flex-col justify-between">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow">
                  🔥 সবচেয়ে জনপ্রিয় • মেগা বান্ডেল
                </div>

                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-[#F3EEFF]">
                    <img
                      src={MEDIA.logo}
                      alt="Vocab Hero Bundle"
                      className="w-11 h-11 rounded-xl object-cover ring-2 ring-[#A855F7]"
                    />
                    <div>
                      <span className="inline-block text-[11px] font-extrabold text-[#B45309] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full mb-0.5">
                        বান্ডেল অফার • ৫০% ছাড়
                      </span>
                      <h3 className="text-lg font-extrabold text-[#2E1065]">
                        প্রো ইবুক + ৩ডি ফ্ল্যাশকার্ড বান্ডেল
                      </h3>
                    </div>
                  </div>

                  <div className="my-5 text-center bg-gradient-to-br from-[#FAF8FF] to-[#FEF9C3]/60 rounded-2xl p-4 border border-[#FDE047]">
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="text-xl font-bold text-[#8B7FA8] line-through">
                        ৩০০৳
                      </span>
                      <span className="text-5xl font-black bg-gradient-to-r from-[#6D28D9] to-[#C026D3] bg-clip-text text-transparent tracking-tight">
                        ১৫০৳
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#6D28D9] mt-1">
                      মাত্র ৫০৳ বাড়তিতে পাচ্ছেন ১,৮৭৭ শব্দের ৩ডি ফ্ল্যাশকার্ড!
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm font-semibold text-[#2E1065] mb-4">
                    {[
                      "প্রো ইবুকের সবকিছু (ডে + নাইট দুটি ৩৫৭ পৃষ্ঠার PDF)",
                      "ইন্টারঅ্যাক্টিভ ৩ডি ফ্ল্যাশকার্ড অ্যাপ (১,৮৭৭ শব্দ)",
                      "ফ্ল্যাশকার্ডে অফলাইন UK, US, ধীরে ও উদাহরণ অডিও",
                      "নাইট মোড, গল্প ১–১০০ ফিল্টার ও মুখস্থ ট্র্যাকার",
                      "বোনাস: Anki ফ্ল্যাশকার্ড ডেক ও অডিও সেটআপ গাইড",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] font-bold text-[#B45309] bg-[#FFFBEB] border border-[#FDE68A] rounded-xl px-3 py-2 mb-5">
                    * বিঃদ্রঃ ফ্ল্যাশকার্ড আলাদাভাবে বিক্রি হয় না — কেবল ১৫০৳-এর
                    এই বান্ডেল অফারেই প্রো ইবুকের সাথে পাবেন।
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => openOrderModal("bundle")}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C026D3] hover:brightness-110 text-white font-extrabold text-base px-6 py-4 rounded-2xl shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-5 h-5 text-[#FDE047]" />
                    বান্ডেল অফার নিন — ১৫০৳
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="mt-3 flex items-center justify-center gap-4 text-[11px] font-bold text-[#6B5B95]">
                    <span className="inline-flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-[#E2136E]" />
                      শুধুমাত্র bKash পেমেন্ট
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#059669]" />
                      হোয়াটসঅ্যাপ ডেলিভারি
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section
        id="faq"
        className="py-16 sm:py-20 bg-gradient-to-b from-[#F5F0FF] to-[#FAF8FF] border-t border-[#E7DEFF]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#7C3AED] bg-[#EDE9FE] px-3.5 py-1 rounded-full mb-3">
              সাধারণ প্রশ্নোত্তর
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E1065]">
              আপনার মনে থাকা কিছু প্রশ্নের উত্তর
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E7DEFF] overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-sm sm:text-base text-[#2E1065] hover:bg-[#FAF8FF] transition-colors"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#7C3AED] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#6B5B95] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#4B3F6B] leading-relaxed border-t border-[#F3EEFF]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODERN VIOLET-PURPLE GRADIENT FOOTER */}
      <footer className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#7E22CE] text-white/90 py-11">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={MEDIA.logo}
              alt="Vocab Hero Logo"
              className="w-11 h-11 rounded-xl object-cover ring-2 ring-[#FDE047]"
            />
            <div>
              <p className="font-extrabold text-white text-base">
                গল্পে শিখি Vocabulary!
              </p>
              <p className="text-xs text-purple-200">
                Mr. Grasshopper • WhatsApp: {CONTACT.whatsappNumber}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold">
            <button
              onClick={() => scrollToSection("promo-video")}
              className="hover:text-[#FDE047] transition-colors"
            >
              প্রোমো ভিডিও
            </button>
            <button
              onClick={() => scrollToSection("sample-story")}
              className="hover:text-[#FDE047] transition-colors"
            >
              নমুনা গল্প
            </button>
            <button
              onClick={() => scrollToSection("memory-hacks")}
              className="hover:text-[#FDE047] transition-colors"
            >
              মেমোরি হ্যাক
            </button>
            <button
              onClick={openOrderModal}
              className="bg-white/15 hover:bg-white/25 text-[#FEF08A] font-bold px-3.5 py-2 rounded-xl transition-colors"
            >
              ১০০৳-এ অর্ডার করুন
            </button>
          </div>
        </div>
      </footer>

      {/* MANUAL bKash PAYMENT MODAL (bKash ONLY + Copy Button + WhatsApp Instructions) */}
      {orderModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1038]/70 backdrop-blur-sm"
          onClick={() => setOrderModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-gradient-to-b from-white to-[#FAF6FF] rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-[#C4B5FD] max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-[#6B5B95] hover:bg-[#EDE9FE] transition-colors"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5 pr-8">
              <img
                src={MEDIA.logo}
                alt="Vocab Hero"
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-[#A855F7]"
              />
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-[#F3E8FF] text-[#7C3AED] px-2.5 py-0.5 rounded-full">
                  {selectedPlan === "bundle"
                    ? "মেগা বান্ডেল • ৫০% ছাড় (১৫০৳)"
                    : "৫০% ডিসকাউন্ট • মাত্র ১০০৳"}
                </span>
                <h3 className="text-lg font-extrabold text-[#2E1065] mt-0.5">
                  বিকাশে অর্ডার সম্পন্ন করুন
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                onClick={() => setSelectedPlan("ebook")}
                className={`py-2 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                  selectedPlan === "ebook"
                    ? "bg-[#6D28D9] text-white border-[#6D28D9]"
                    : "bg-white text-[#4C1D95] border-[#DDD6FE]"
                }`}
              >
                শুধু প্রো ইবুক (১০০৳)
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlan("bundle")}
                className={`py-2 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                  selectedPlan === "bundle"
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#C026D3] text-white border-[#A855F7]"
                    : "bg-white text-[#4C1D95] border-[#DDD6FE]"
                }`}
              >
                🔥 ইবুক + ফ্ল্যাশকার্ড (১৫০৳)
              </button>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r from-[#F5F0FF] to-[#FDF2F8] border border-[#DDD6FE] rounded-2xl px-4 py-3 mb-4">
              <div>
                <p className="text-xs font-bold text-[#6B5B95]">
                  {selectedPlan === "bundle"
                    ? "প্রো ইবুক (ডে+নাইট) + ৩ডি ফ্ল্যাশকার্ড বান্ডেল"
                    : "গল্পে শিখি Vocabulary! প্রো (ডে+নাইট PDF)"}
                </p>
                <p className="text-[11px] text-[#7C3AED] font-semibold">
                  {selectedPlan === "bundle"
                    ? "৩৫৭ পৃষ্ঠার ২টি PDF + ১,৮৭৭ শব্দের ফ্ল্যাশকার্ড + Anki"
                    : "১০০ গল্প • ১০০ জিবলি ছবি • ৩৫৭ পৃষ্ঠা"}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#8B7FA8] line-through block">
                  {selectedPlan === "bundle" ? "৩০০৳" : "২০০৳"}
                </span>
                <span className="text-xl font-black text-[#6D28D9]">
                  {selectedPlan === "bundle" ? "১৫০৳" : "১০০৳"}
                </span>
              </div>
            </div>

            {/* bKash Number Box with Copy Button */}
            <div className="rounded-2xl p-4 bg-gradient-to-r from-[#FFF0F6] to-[#FCE7F3] border-2 border-[#F472B6]/40 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#BE185D]">
                  <Smartphone className="w-4 h-4" />
                  বিকাশ নম্বর (bKash Send Money)
                </span>
                <span className="text-[11px] font-extrabold bg-white text-[#BE185D] px-2 py-0.5 rounded-md border border-[#FBCFE8]">
                  {selectedPlan === "bundle" ? "১৫০৳ পাঠান" : "১০০৳ পাঠান"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 bg-white rounded-xl px-3.5 py-2.5 border border-[#FBCFE8]">
                <span className="text-lg sm:text-xl font-black tracking-wider text-[#2E1065] select-all">
                  {CONTACT.bkashNumber}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT.bkashNumber, "bkash")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all shrink-0 ${
                    copiedField === "bkash"
                      ? "bg-[#059669] text-white"
                      : "bg-gradient-to-r from-[#DB2777] to-[#E11D48] hover:brightness-110 text-white shadow-sm"
                  }`}
                >
                  {copiedField === "bkash" ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      কপি হয়েছে!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      কপি করুন
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Step-by-step Manual Instructions */}
            <div className="bg-white rounded-2xl p-4 border border-[#E7DEFF] mb-4 space-y-2.5">
              <p className="text-xs font-extrabold text-[#4C1D95] uppercase tracking-wide">
                অর্ডার করার সহজ নিয়ম:
              </p>
              <ol className="space-y-2 text-xs sm:text-sm text-[#4B3F6B]">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    ১
                  </span>
                  <span>
                    উপরের বিকাশ নম্বরটি কপি করে আপনার বিকাশ অ্যাপ থেকে{" "}
                    <strong className="text-[#2E1065]">
                      {selectedPlan === "bundle" ? "১৫০৳" : "১০০৳"} Send Money
                    </strong>{" "}
                    করুন।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    ২
                  </span>
                  <span>
                    পেমেন্টের{" "}
                    <strong className="text-[#2E1065]">
                      বিকাশ ট্রানজেকশন আইডি (TrxID)
                    </strong>{" "}
                    অথবা <strong className="text-[#2E1065]">স্ক্রিনশট</strong>{" "}
                    নিচের হোয়াটসঅ্যাপ নম্বরে পাঠিয়ে দিন।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    ৩
                  </span>
                  <span>
                    যাচাই করার সাথে সাথেই হোয়াটসঅ্যাপে আপনার{" "}
                    <strong className="text-[#2E1065]">
                      {selectedPlan === "bundle"
                        ? "ডে + নাইট প্রো PDF ও ৩ডি ফ্ল্যাশকার্ড বান্ডেল"
                        : "৩৫৭ পৃষ্ঠার ডে + নাইট প্রো PDF ইবুক"}
                    </strong>{" "}
                    পাঠিয়ে দেওয়া হবে।
                  </span>
                </li>
              </ol>
            </div>

            {/* WhatsApp Box Below */}
            <div className="rounded-2xl p-4 bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5]/60 border border-[#6EE7B7]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#047857]" />
                  <span className="text-xs font-extrabold text-[#065F46]">
                    হোয়াটসঅ্যাপ নম্বর: {CONTACT.whatsappNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT.whatsappNumber, "whatsapp")}
                  className="text-[11px] font-bold text-[#047857] bg-white px-2.5 py-1 rounded-lg border border-[#A7F3D0] hover:bg-[#ECFDF5]"
                >
                  {copiedField === "whatsapp" ? "কপি হয়েছে!" : "কপি"}
                </button>
              </div>

              <a
                href={
                  selectedPlan === "bundle"
                    ? CONTACT.whatsappBundleLink
                    : CONTACT.whatsappLink
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#059669] to-[#10B981] hover:brightness-105 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-md shadow-emerald-500/20 transition-all"
              >
                <Send className="w-4 h-4" />
                হোয়াটসঅ্যাপে TrxID / স্ক্রিনশট পাঠান
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
