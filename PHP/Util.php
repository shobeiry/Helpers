<?php
class Util
{
    /**
     * convert bytes to human readable size
     *
     * @example Util::human_readable_size(1024,2); // 1B
     *
     * @param $size: bytes want to convert to human readable size
     * @param int $precision: length of float precision
     * @return string|false|int: human readable size
     */
    public static function human_readable_size($size, $precision = 2)
    {
        $units = array('B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $step = 1024;
        $i = 0;
        while (($size / $step) > 0.9) {
            $size = $size / $step;
            $i++;
        }
        return round($size, $precision) . ' ' . $units[$i];
    }
}