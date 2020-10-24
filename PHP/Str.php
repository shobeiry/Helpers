<?php

class Str
{
    /**
     * truncate string
     *
     * @xample Std:truncate("<h1>Hello world</h1>", 5, "***", true); // <h1>Hello***</h1>
     *
     * @param string $text : string went to truncate
     * @param int $length : truncate length
     * @param string $e : truncate symbol
     * @param bool $isHTML : input text is html or not
     * @return false|string: truncated string
     */
    public static function truncate($text, $length, $e = '...', $isHTML = false)
    {
        $i = 0;
        $tags = array();
        if ($isHTML) {
            preg_match_all('/<[^>]+>([^<]*)/', $text, $m, PREG_OFFSET_CAPTURE | PREG_SET_ORDER);
            foreach ($m as $o) {
                if ($o[0][1] - $i >= $length)
                    break;
                $t = substr(strtok($o[0][0], " \t\n\r\0\x0B>"), 1);
                if ($t[0] != '/')
                    $tags[] = $t;
                elseif (end($tags) == substr($t, 1))
                    array_pop($tags);
                $i += $o[1][1] - $o[0][1];
            }
        }
        return substr($text, 0, $length = min(strlen($text), $length + $i)) . (count($tags = array_reverse($tags)) ? ' ' : '') . (strlen($text) > $length ? $e : '');
    }

    /**
     * format text
     *
     * @example Str::format("hello %s %d", "world", 1202); // "hello world 1202"
     *
     * @param $str: text will be format
     * @param mixed ...$args: arguments
     * @return string: formatted text
     */
    public static function format($str, ...$args)
    {
        return sprintf($str, ...$args);
    }
}