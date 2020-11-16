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

    /**
     * check input national code is iranian national code or not
     *
     * @example Util::is_ir_national_code(1111111111); // false
     *
     * @param $national_code
     * @return boolean: check national code result
     */
    public static function is_ir_national_code($national_code)
    {
        $national_code = (string)preg_replace('/[^0-9]/', '', $national_code);

        if (strlen($national_code) != 10) {
            return false;
        }

        $list_code = str_split($national_code);
        $last = (int)$list_code[9];
        unset($list_code[9]);
        $i = 10;
        $sum = 0;

        foreach ($list_code as $key => $_) {
            $sum += intval($_) * $i--;
        }

        $mod = (int)$sum % 11;

        if ($mod >= 2) {
            $mod = 11 - $mod;
        }

        return $mod == $last;
    }

    /**
     * check input number is iranian mobile number or not
     *
     * @example Util::is_ir_mobile(09111111111); // true
     *
     * @param $number
     * @return boolean: check mobile number result
     */
    public static function is_ir_mobile($number)
    {
        return preg_match("/^(?:98|\+98|0098|0)?9[0-9]{9}$/", $number);
    }
}