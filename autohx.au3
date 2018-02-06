#include <Misc.au3>
#include <MsgBoxConstants.au3>
#include <TrayConstants.au3>
#include <File.au3>

Opt("WinTitleMatchMode", 2) ; Configures AutoIt to find a search term in any part of the window title
WinActivate("hackmud") ; Activates the Word window with hello.docx (or hello.doc) in any part of the title bar
WinWaitActive("hackmud") ; Waits for the window to be the active window

sleep(1000)
; ([\w.]+)\r\n
;Local $aScript = StringSplit("anonymous_sbg15u.pub_832hij,abandoned_gy5vb5.external_7okimp,abndnd_u4ue2d.pub_info_rnvk22,anon_cnjh8p.access_275fkn,anon_r4cwa7.public_u4ei08,derelict_whk5zo.pub_cew6lz,anon_kginun.public_iorek8,abandoned_7zu5a6.external_841usx,anon_sk9h6o.entry_xpsv0j,abandoned_ehhuo2.pub_info_5pi6hp,abandoned_wzy4pj.entry_kcmxfx,abndnd_8s7e0d.pub_info_klnc39,abandoned_kpsia1.pub_info_3zico1,anon_2ff5jv.p_yjth14,uknown_eg7rom.out_bi1o2v,uknown_1hccwh.p_0yned9,abandoned_0n2ziz.p_816nit", ",")
;Local $aScript = _FileReadToArray('C:\Users\jonas\AppData\Roaming\hackmud\snj2\scripts\scripts.txt')

Local $aScript
$file = "C:\Users\jonas\AppData\Roaming\hackmud\snj2\scripts\scripts.txt"

_FileReadToArray($file, $aScript)
;


Global $g_bPaused = False
Global $n_script = 1
Global $n_max = UBound($aScript) 

HotKeySet("{PAUSE}", "TogglePause")
HotKeySet("{ESC}", "Terminate")
HotKeySet("+!d", "ShowMessage") ; Shift-Alt-d
HotKeySet("{F4}", "nextHack") ; Shift-Alt-d

While 1
    Sleep(100)
WEnd

Func nextHack()
	Beep(690, 120)
	If $n_script = $n_max Then
		Send("/dc {ENTER}")
		Terminate()
	EndIf
	Send("/hx " & $aScript[$n_script] & " " &($n_max - $n_script)& "{ENTER}")
	$n_script = $n_script + 1
EndFunc

Func TogglePause()
    $g_bPaused = Not $g_bPaused
    While $g_bPaused
        Sleep(100)
        ToolTip('Script is "Paused"', 0, 0)
    WEnd
    ToolTip("")
EndFunc   ;==>TogglePause

Func Terminate()
    Beep(440, 200)
	;MsgBox($MB_SYSTEMMODAL, "", "Done..")
	Exit
EndFunc   ;==>Terminate

Func ShowMessage()
    MsgBox($MB_SYSTEMMODAL, "", "This is a message.")
EndFunc   ;==>ShowMessage

;Send("Text to notepad:{ENTER}{ENTER}Derp") ;



;TrayTip("Hmud AutoHX", "Finished", 0, $TIP_ICONASTERISK)

;TrayTip("clears any tray tip", "", 0)

;TrayTip("", "A different tray tip.", 5)